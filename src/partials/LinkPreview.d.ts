import '../styles/link-preview.css';
import type { HTMLAttributeAnchorTarget } from 'react';

type ILinkPreviewProps = {
	href: string;
	title: string;
	description: string;
	img: string;
	imgAlt?: string;
	target?: HTMLAttributeAnchorTarget;
};
declare const LinkPreview: (
	props: ILinkPreviewProps,
) => '' | import('react/jsx-runtime').JSX.Element;

export { LinkPreview };
export default LinkPreview;
