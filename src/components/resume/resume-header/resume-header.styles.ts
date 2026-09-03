import { css } from 'lit';

export const ResumeHeaderStyles = css`
	:host {
		display: block;
	}

	.header {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 16px;
		padding-bottom: 20px;
		border-bottom: 2px solid var(--resume-accent);
	}

	h1 {
		margin: 0;
		font-size: 32px;
		line-height: 1.15;
		color: var(--resume-ink);
	}

	.title {
		margin: 4px 0 0;
		font-size: 17px;
		font-weight: 600;
		color: var(--resume-accent);
	}

	.tagline {
		margin: 4px 0 0;
		font-size: 14px;
		color: var(--resume-ink-soft);
	}

	.location {
		margin: 6px 0 0;
		font-size: 13px;
		color: var(--resume-ink-faint);
	}

	.contact {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 6px;
		font-size: 13px;
	}

	::slotted(a) {
		color: var(--resume-ink-soft);
		text-decoration: none;
	}

	::slotted(a:hover) {
		color: var(--resume-accent);
		text-decoration: underline;
	}

	@media print {
		.contact {
			align-items: flex-start;
		}

		::slotted(a) {
			color: var(--resume-ink) !important;
		}
	}

	@media (max-width: 640px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
		}

		.contact {
			align-items: flex-start;
		}
	}
`;
