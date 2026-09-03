import { html, LitElement, type TemplateResult } from 'lit';
import { ResumePrintStyles } from '../shared/resume-print.styles';
import { EarlierRoleStyles } from './earlier-role.styles';

/**
 * # Earlier Role
 * A compact, single-line entry for early-career roles that don't need the
 * full `resume-entry` treatment - keeps older, less-relevant history
 * scannable instead of pushing the resume to extra pages. Org/title/dates
 * are slotted elements rather than data props, same reasoning as the other
 * resume components.
 * ## Usage
 * ```html
 * <resume-earlier-role>
 *   <span slot="org">Lewisville ISD</span>
 *   <span slot="title">Software Engineer Lead</span>
 *   <span slot="dates">July 2014 – June 2017</span>
 *   Built RESTful APIs and full-stack tools on Laravel, Lumen, and Slim...
 * </resume-earlier-role>
 * ```
 * @element resume-earlier-role
 * @slot org - Organization name.
 * @slot title - Role title.
 * @slot dates - Date range.
 * @slot - A one or two sentence summary of the role.
 */
export class EarlierRole extends LitElement {
	static styles = [EarlierRoleStyles, ResumePrintStyles];

	render(): TemplateResult {
		return html`
			<div class="role">
				<p class="line">
					<span class="dates"><slot name="dates"></slot></span>
					<strong><slot name="title"></slot></strong> · <slot name="org"></slot>
				</p>
				<p class="note"><slot></slot></p>
			</div>
		`;
	}
}
