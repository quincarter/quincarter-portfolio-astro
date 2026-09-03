import { html, LitElement, type TemplateResult } from 'lit';
import '../theme-toggle/resume-theme-toggle';
import { ResumeToolbarStyles } from './resume-toolbar.styles';

/**
 * # Resume Toolbar
 * The on-screen-only action bar above the resume: a link back to the main
 * site, the `resume-theme-toggle`, and a "Print / Save as PDF" button
 * that hands off to the browser's native print dialog (which is also how
 * a visitor saves a PDF copy). It never renders on paper - `:host` is
 * `display: none` under `@media print`.
 * @element resume-toolbar
 */
export class ResumeToolbar extends LitElement {
	static styles = [ResumeToolbarStyles];

	private _print = (): void => {
		window.print();
	};

	render(): TemplateResult {
		return html`
			<div class="toolbar">
				<a class="back" href="/">← Back to quincarter.com</a>
				<div class="actions">
					<resume-theme-toggle></resume-theme-toggle>
					<button type="button" class="print" @click="${this._print}">Print / Save as PDF</button>
				</div>
			</div>
		`;
	}
}
