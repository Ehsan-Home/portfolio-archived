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
        link="https://github.com/Ehsan-Home/URL_shortener"
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
        name="Sealed-bid auction based on blockchain"
        description="Blockchain-based auction-system that could protect the privacy, as well as reducing the cost by 70%. I leveraged React.js, Django, and Ethereum blockchain to implement this project."
        link="https://dspace.library.uvic.ca/handle/1828/14292"
        img={{ src: '/assets/images/blockchain.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>React.js</Tags>
            <Tags color={ColorTags.EMERALD}>Django</Tags>
            <Tags color={ColorTags.SKY}>Blockchain</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
