import { css } from 'lit';

export const ResumeEntryStyles = css`
	:host {
		display: block;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 4px 16px;
	}

	h3 {
		margin: 0;
		font-size: 16px;
		color: var(--resume-ink);
	}

	.org {
		margin: 2px 0 0;
		font-size: 14px;
		font-weight: 600;
		color: var(--resume-accent);
	}

	.org ::slotted(a) {
		color: inherit;
		text-decoration: none;
	}

	.org ::slotted(a:hover) {
		text-decoration: underline;
	}

	.when {
		text-align: right;
		white-space: nowrap;
	}

	.dates {
		margin: 0;
		font-size: 13px;
		font-weight: 600;
		color: var(--resume-ink-soft);
	}

	.location {
		margin: 2px 0 0;
		font-size: 12px;
		color: var(--resume-ink-faint);
	}

	.bullets {
		margin-top: 8px;
	}

	/* !important: the page's global Tailwind Preflight resets margin/padding
	 * on every element, including slotted ones - it wins ties against
	 * shadow-tree rules for anything actually living in the light DOM. */
	::slotted(ul) {
		margin: 0 !important;
		padding-left: 18px !important;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	::slotted(li) {
		font-size: 13.5px;
		line-height: 1.5;
		color: var(--resume-ink-soft);
	}

	@media (max-width: 640px) {
		.when {
			text-align: left;
		}
	}
`;
