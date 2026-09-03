import { css } from 'lit';

export const ResumeThemeToggleStyles = css`
	:host {
		display: inline-flex;
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font: inherit;
		font-size: 13px;
		font-weight: 600;
		color: #e2e8f0;
		background: transparent;
		border: 1px solid #334155;
		border-radius: 999px;
		padding: 8px 14px;
		cursor: pointer;
		transition:
			border-color 0.15s ease,
			color 0.15s ease;
	}

	button:hover {
		border-color: #38bdf8;
		color: #38bdf8;
	}

	svg {
		width: 15px;
		height: 15px;
		flex-shrink: 0;
	}
`;
