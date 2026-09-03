import { ResumeHeader } from './ResumeHeader';

if (!customElements.get('resume-header')) {
	customElements.define('resume-header', ResumeHeader);
}
