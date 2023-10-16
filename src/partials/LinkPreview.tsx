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

const LinkPreview = (props: ILinkPreviewProps) => {
  if (props.title && props.href) {
    return (
      <a
        className="fragment"
        href={props.href}
        target={props.target || '_blank'}
      >
        <img src={props.img} alt={props.imgAlt || props.title} />
        <div className="link-content">
          <h3>{props.title}</h3>
          <p className="text">{props.description}</p>
        </div>
      </a>
    );
  }
  return '';
};

export { LinkPreview };
export default LinkPreview;
