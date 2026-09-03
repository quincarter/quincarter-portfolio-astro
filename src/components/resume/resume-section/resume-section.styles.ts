import { css } from 'lit';

export const ResumeSectionStyles = css`
	:host {
		display: block;
	}

	h2 {
		margin: 0 0 14px;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--resume-accent);
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	@media print {
		/* Keeps a heading from being stranded alone at the bottom of a page
		 * with its content pushed to the next one - the section itself is
		 * still free to break wherever its content actually runs out of room. */
		h2 {
			break-after: avoid;
		}
	}
`;
