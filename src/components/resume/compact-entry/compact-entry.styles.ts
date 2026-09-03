import { css } from 'lit';

export const CompactEntryStyles = css`
	:host {
		display: block;
	}

	.line {
		margin: 0;
		font-size: 13.5px;
		color: var(--resume-ink);
	}

	.line strong {
		font-weight: 700;
	}

	.dates {
		float: right;
		font-size: 12px;
		font-weight: 600;
		color: var(--resume-ink-soft);
	}

	.note {
		margin: 3px 0 0;
		font-size: 12.5px;
		line-height: 1.5;
		color: var(--resume-ink-soft);
	}

	@media (max-width: 640px) {
		.dates {
			float: none;
			display: block;
			margin-top: 2px;
		}
	}
`;
