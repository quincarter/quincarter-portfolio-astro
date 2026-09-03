import { html, LitElement, type TemplateResult } from 'lit';
import { ResumePrintStyles } from '../shared/resume-print.styles';
import { ResumeEntryStyles } from './resume-entry.styles';

/**
 * # Resume Entry
 * A single role: title, org (plain text or a linked `<a>`, caller's
 * choice), dates, an optional location, and a bullet list. Every field is
 * a named slot rather than a data prop, same reasoning as `resume-header`
 * - it keeps the actual resume text as plain, ATS-parseable HTML that
 * Astro renders statically, with this component only handling the layout
 * around it.
 * ## Usage
 * ```html
 * <resume-entry>
 *   <span slot="title">Lead Software Engineer</span>
 *   <a slot="org" href="https://capitalone.com" target="_blank" rel="noopener">Capital One</a>
 *   <span slot="dates">July 2023 – Present</span>
 *   <span slot="location">Richmond, VA</span>
 *   <ul>
 *     <li>Lead frontend engineer for auto refinance...</li>
 *   </ul>
 * </resume-entry>
 * ```
 * @element resume-entry
 * @slot title - Role/job title.
 * @slot org - Organization name - a plain element, or an `<a>` if it should link out.
 * @slot dates - Date range.
 * @slot location - Optional city/region. Omit entirely to skip the row.
 * @slot - Bullet list (or any content) describing the role.
 */
export class ResumeEntry extends LitElement {
	static styles = [ResumeEntryStyles, ResumePrintStyles];

	render(): TemplateResult {
		const hasLocation = this.querySelector('[slot="location"]') !== null;

		return html`
			<article>
				<div class="row">
					<div class="who">
						<h3><slot name="title"></slot></h3>
						<p class="org"><slot name="org"></slot></p>
					</div>
					<div class="when">
						<p class="dates"><slot name="dates"></slot></p>
						${hasLocation ? html`<p class="location"><slot name="location"></slot></p>` : ''}
					</div>
				</div>
				<div class="bullets"><slot></slot></div>
			</article>
		`;
	}
}
