import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Care Changer"
        description="A urinary incontinence detection web & mobile apps. This platform consists of an IoT device, a web app, AWS server, and native mobile applications. This platform could enhance caring time by 60%!"
        link="https://carechanger.ca/"
        img={{
          src: '/assets/images/carechanger.png',
          alt: 'Care Changer logo',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.LIME}>Swift</Tags>
            <Tags color={ColorTags.SKY}>Java</Tags>
          </>
        }
      />
      <Project
        name="URL Shortener"
        description="A URL shortener web app developed by Django and SQLLite3 on the back-end, React.js, JavaScript, HTML, and CSS on the front-end, and Docker for deployment."
        link="/"
        img={{
          src: '/assets/images/url-shortener.png',
          alt: 'url shortener pic',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React.js</Tags>
            <Tags color={ColorTags.EMERALD}>JavaScript</Tags>
            <Tags color={ColorTags.YELLOW}>Django</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
