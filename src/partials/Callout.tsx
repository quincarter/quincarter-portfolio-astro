import '../styles/callout.css';

import type { ReactNode } from 'react';

type CalloutType = 'note' | 'tip' | 'warning' | 'danger';

type ICalloutProps = {
	type?: CalloutType;
	children: ReactNode;
};

const LABELS: Record<CalloutType, string> = {
	note: 'Note',
	tip: 'Tip',
	warning: 'Warning',
	danger: 'Danger',
};

const ICONS: Record<CalloutType, string> = {
	note: 'ℹ️',
	tip: '💡',
	warning: '⚠️',
	danger: '🚫',
};

const Callout = (props: ICalloutProps) => {
	const type = props.type && LABELS[props.type] ? props.type : 'note';

	return (
		<div className={`callout callout-${type}`}>
			<div className="callout-title">
				<span className="callout-icon" aria-hidden="true">
					{ICONS[type]}
				</span>
				{LABELS[type]}
			</div>
			<div className="callout-body">{props.children}</div>
		</div>
	);
};

export { Callout };
export default Callout;
