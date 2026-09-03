import { css } from 'lit';

/**
 * Shared print-media rules for resume components. Without this, a browser's
 * "Print / Save as PDF" will happily split a job entry or a section heading
 * across two pages - this keeps each block intact.
 */
export const ResumePrintStyles = css`
	@media print {
		:host {
			break-inside: avoid;
			page-break-inside: avoid;
		}
	}
`;
