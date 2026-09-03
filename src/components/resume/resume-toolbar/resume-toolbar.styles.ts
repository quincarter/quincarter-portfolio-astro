import { css } from 'lit';

export const ResumeToolbarStyles = css`
	:host {
		display: block;
	}

	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		max-width: 850px;
		margin: 0 auto 16px;
		padding: 0 4px;
	}

	.back {
		font-size: 14px;
		color: #e2e8f0;
		text-decoration: none;
	}

	.back:hover {
		text-decoration: underline;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.print {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font: inherit;
		font-size: 14px;
		font-weight: 600;
		color: #0f172a;
		background: #38bdf8;
		border: none;
		border-radius: 999px;
		padding: 9px 18px;
		cursor: pointer;
		transition: background 0.15s ease;
	}

	.print:hover {
		background: #7dd3fc;
	}

	@media print {
		:host {
			display: none;
		}
	}
`;
