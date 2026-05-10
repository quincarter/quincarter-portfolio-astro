import '../styles/blog-gallery.css';

import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
	BlogGallery,
	GradientText,
	Section,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
	talkList: MarkdownInstance<IFrontmatter>[];
};

const RecentTalks = (props: IRecentPostsProps) => (
	<Section
		title={
			<div className="flex items-baseline justify-between">
				<div>
					Recent <GradientText>Talks</GradientText>
				</div>

				<div className="text-sm">
					<a href="/talks/">View all Talks →</a>
				</div>
			</div>
		}
	>
		<div className="blog-gallery">
			<BlogGallery postList={props.talkList} />
		</div>
	</Section>
);

export { RecentTalks };
