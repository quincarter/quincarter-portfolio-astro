import { html, LitElement, type TemplateResult } from 'lit';
import { ResumePrintStyles } from '../shared/resume-print.styles';
import { SkillGroupStyles } from './skill-group.styles';

/**
 * # Skill Group
 * One labeled category of skills (Languages, Frontend, ...), rendered as
 * pills on screen and collapsed to a plain comma-separated line on print
 * so the printed resume stays compact. The category label and each skill
 * are slotted elements rather than data props, keeping them plain,
 * statically-rendered text.
 * ## Usage
 * ```html
 * <resume-skill-group>
 *   <span slot="category">Frontend</span>
 *   <span>Lit Element</span>
 *   <span>Angular</span>
 * </resume-skill-group>
 * ```
 * @element resume-skill-group
 * @slot category - The group's label.
 * @slot - `<span>` elements, one per skill.
 */
export class SkillGroup extends LitElement {
	static styles = [SkillGroupStyles, ResumePrintStyles];

	render(): TemplateResult {
		return html`
			<div class="group">
				<h3><slot name="category"></slot></h3>
				<div class="pills"><slot></slot></div>
			</div>
		`;
	}
}
