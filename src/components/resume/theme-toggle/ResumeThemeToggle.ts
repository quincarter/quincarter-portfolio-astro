import { html, LitElement, svg, type TemplateResult } from 'lit';
import { ResumeThemeToggleStyles } from './resume-theme-toggle.styles';

const THEME_KEY = 'resume-theme';
const THEME_ATTR = 'resumeTheme';

const SUN_ICON = svg`
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
		<circle cx="12" cy="12" r="4"></circle>
		<line x1="12" y1="2" x2="12" y2="4"></line>
		<line x1="12" y1="20" x2="12" y2="22"></line>
		<line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
		<line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
		<line x1="2" y1="12" x2="4" y2="12"></line>
		<line x1="20" y1="12" x2="22" y2="12"></line>
		<line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
		<line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
	</svg>
`;

const MOON_ICON = svg`
	<svg viewBox="0 0 24 24" fill="currentColor">
		<path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"></path>
	</svg>
`;

/**
 * # Resume Theme Toggle
 * Switches the resume paper between the site's dark theme (the default,
 * matching the rest of quincarter.com) and a light "sheet of paper" theme.
 * It works by flipping `data-resume-theme` on `<html>` - every resume
 * component reads its colors from CSS custom properties inherited from
 * that attribute (see `resume.css`), so this is the only place
 * theme-switching logic lives.
 *
 * The choice is remembered in `localStorage` and re-applied by the inline
 * script at the top of the resume page, before the paper paints, so
 * there's no flash of the wrong theme on repeat visits. Printing always
 * forces the light theme regardless of this toggle - see the `@media
 * print` override in `resume.css`.
 * @element resume-theme-toggle
 */
export class ResumeThemeToggle extends LitElement {
	static styles = [ResumeThemeToggleStyles];

	static properties = {
		_isLight: { state: true },
	};

	declare _isLight: boolean;

	constructor() {
		super();
		this._isLight = document.documentElement.dataset[THEME_ATTR] === 'light';
	}

	private _toggle = (): void => {
		this._isLight = !this._isLight;

		if (this._isLight) {
			document.documentElement.dataset[THEME_ATTR] = 'light';
			localStorage.setItem(THEME_KEY, 'light');
		} else {
			delete document.documentElement.dataset[THEME_ATTR];
			localStorage.setItem(THEME_KEY, 'dark');
		}
	};

	render(): TemplateResult {
		return html`
			<button
				type="button"
				aria-pressed="${this._isLight}"
				aria-label="${this._isLight ? 'Switch to dark theme' : 'Switch to light, printable theme'}"
				@click="${this._toggle}"
			>
				${this._isLight ? MOON_ICON : SUN_ICON}
				<span>${this._isLight ? 'Dark' : 'Light'}</span>
			</button>
		`;
	}
}
