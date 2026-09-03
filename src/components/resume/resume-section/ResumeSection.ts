import { html, LitElement, type TemplateResult } from 'lit';
import { ResumeSectionStyles } from './resume-section.styles';

/**
 * # Resume Section
 * A titled block of the resume (Experience, Skills, Education, ...).
 * Purely structural chrome around whatever is slotted in - it doesn't know
 * or care what kind of content it holds. The heading is a slot rather than
 * an attribute so it's real, always-present `<h2>` text.
 *
 * Deliberately does NOT use `ResumePrintStyles` (`break-inside: avoid`):
 * a section like Experience is routinely taller than a single printed
 * page, so it must be allowed to break across pages. Forcing it to stay
 * whole pushes the entire section onto the next page and leaves the
 * previous one mostly blank - `resume-entry` and `resume-compact-entry`
 * are where "don't split this" actually belongs, since those are small
 * enough to always fit.
 * ## Usage
 * ```html
 * <resume-section>
 *   <span slot="heading">Experience</span>
 *   <resume-entry>...</resume-entry>
 * </resume-section>
 * ```
 * @element resume-section
 * @slot heading - The section title, rendered as an `<h2>`.
 * @slot - The section's content.
 */
export class ResumeSection extends LitElement {
	static styles = [ResumeSectionStyles];

	render(): TemplateResult {
		return html`
			<section>
				<h2><slot name="heading"></slot></h2>
				<div class="body"><slot></slot></div>
			</section>
		`;
	}
}
