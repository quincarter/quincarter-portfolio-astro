import { ResumeToolbar } from './ResumeToolbar';

if (!customElements.get('resume-toolbar')) {
	customElements.define('resume-toolbar', ResumeToolbar);
}
