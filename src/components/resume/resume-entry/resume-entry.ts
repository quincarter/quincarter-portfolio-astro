import { ResumeEntry } from './ResumeEntry';

if (!customElements.get('resume-entry')) {
	customElements.define('resume-entry', ResumeEntry);
}
