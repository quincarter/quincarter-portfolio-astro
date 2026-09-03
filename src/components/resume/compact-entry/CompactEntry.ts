import { html, LitElement, type TemplateResult } from 'lit';
import { ResumePrintStyles } from '../shared/resume-print.styles';
import { CompactEntryStyles } from './compact-entry.styles';

/**
 * # Compact Entry
 * A compact, single-line dated entry that doesn't need the full
 * `resume-entry` treatment - used for early-career roles and speaking
 * engagements alike, keeping either scannable instead of pushing the
 * resume to extra pages. Org/title/dates are slotted elements rather
 * than data props, same reasoning as the other resume components.
 * ## Usage
 * ```html
 * <resume-compact-entry>
 *   <span slot="org">Lewisville ISD</span>
 *   <span slot="title">Software Engineer Lead</span>
 *   <span slot="dates">July 2014 – June 2017</span>
 *   Built RESTful APIs and full-stack tools on Laravel, Lumen, and Slim...
 * </resume-compact-entry>
 *
 * <resume-compact-entry>
 *   <span slot="org">RVA.js Meetup</span>
 *   <span slot="title">Building Apps with Lit Element in 2026</span>
 *   <span slot="dates">April & August 2026</span>
 *   Also given at Capital One's internal Async Live conference.
 * </resume-compact-entry>
 * ```
 * @element resume-compact-entry
 * @slot org - Organization or venue name.
 * @slot title - Role title or talk title.
 * @slot dates - Date range.
 * @slot - A one or two sentence summary.
 */
export class CompactEntry extends LitElement {
	static styles = [CompactEntryStyles, ResumePrintStyles];

	render(): TemplateResult {
		return html`
			<div class="entry">
				<p class="line">
					<span class="dates"><slot name="dates"></slot></span>
					<strong><slot name="title"></slot></strong> · <slot name="org"></slot>
				</p>
				<p class="note"><slot></slot></p>
			</div>
		`;
	}
}
