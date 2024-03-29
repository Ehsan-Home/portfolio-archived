import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IRecentProjects = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentProjects = (props: IRecentProjects) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>

        <div className="text-sm">
          <a href="/projects">View all Projects →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentProjects };
