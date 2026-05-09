import { Section } from 'astro-boilerplate-components';

const Footer = () => (
	<Section>
		<div className="text-sm text-gray-200">
			© Copyright {new Date().getFullYear()} by Quin Carter.
		</div>
	</Section>
);

export { Footer };
