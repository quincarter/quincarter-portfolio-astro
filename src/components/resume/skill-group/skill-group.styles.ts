import { css } from 'lit';

export const SkillGroupStyles = css`
	:host {
		display: block;
	}

	h3 {
		margin: 0 0 6px;
		font-size: 12px;
		font-weight: 700;
		color: var(--resume-ink);
	}

	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	/* padding !important: the page's global Tailwind Preflight resets
	 * padding on every element, including slotted ones - it wins ties
	 * against shadow-tree rules for anything actually living in the light DOM. */
	::slotted(span) {
		font-size: 12px;
		line-height: 1.4;
		padding: 3px 9px !important;
		border-radius: 999px;
		background: var(--resume-accent-soft);
		color: var(--resume-accent);
		white-space: nowrap;
	}

	@media print {
		::slotted(span) {
			background: transparent !important;
			padding: 0 !important;
			color: var(--resume-ink-soft) !important;
		}

		::slotted(span)::after {
			content: ' · ';
			color: var(--resume-ink-faint);
		}

		::slotted(span:last-child)::after {
			content: '';
		}
	}
`;
