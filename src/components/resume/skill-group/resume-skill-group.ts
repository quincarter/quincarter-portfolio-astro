import { SkillGroup } from './SkillGroup';

if (!customElements.get('resume-skill-group')) {
	customElements.define('resume-skill-group', SkillGroup);
}
