import { ResumeSection } from './ResumeSection';

if (!customElements.get('resume-section')) {
	customElements.define('resume-section', ResumeSection);
}
