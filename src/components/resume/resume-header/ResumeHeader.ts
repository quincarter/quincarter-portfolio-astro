import { html, LitElement, type TemplateResult } from 'lit';
import { ResumePrintStyles } from '../shared/resume-print.styles';
import { ResumeHeaderStyles } from './resume-header.styles';

/**
 * # Resume Header
 * The banner at the top of the resume: name, current title, a short
 * tagline, location, and a row of contact links.
 *
 * All of it is passed in as real light-DOM elements via named slots
 * instead of data props. Astro renders those directly into the static
 * page, so the resume's identity is plain, crawlable, ATS-parseable text
 * whether or not JavaScript ever runs - this component only supplies the
 * layout and hover styling around it.
 * ## Usage
 * ```html
 * <resume-header>
 *   <span slot="name">Quin Carter</span>
 *   <span slot="title">Lead Software Engineer at Capital One</span>
 *   <span slot="tagline">Frontend Architecture · Web Components · Speaker</span>
 *   <span slot="location">Greater Richmond Region, VA</span>
 *   <a slot="contact" href="mailto:quin.carter@gmail.com">quin.carter@gmail.com</a>
 * </resume-header>
 * ```
 * @element resume-header
 * @slot name - The person's name, rendered as the page `<h1>`.
 * @slot title - Current role / headline.
 * @slot tagline - A short supporting line under the title.
 * @slot location - City/region.
 * @slot contact - One or more `<a>` elements (email, LinkedIn, site, GitHub, etc.)
 */
export class ResumeHeader extends LitElement {
	static styles = [ResumeHeaderStyles, ResumePrintStyles];

	render(): TemplateResult {
		return html`
			<div class="header">
				<div class="identity">
					<h1><slot name="name"></slot></h1>
					<p class="title"><slot name="title"></slot></p>
					<p class="tagline"><slot name="tagline"></slot></p>
					<p class="location"><slot name="location"></slot></p>
				</div>
				<div class="contact">
					<slot name="contact"></slot>
				</div>
			</div>
		`;
	}
}
