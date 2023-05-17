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
        <GradientText>Education</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="University of Victoria (UVIC)"
        description="Master of Engineering (M.eng) - Project: Blockchain-based, Privacy-preserving, First Price Sealed Bid Auction (FPSBA) Verifiable by Participants"
        link="https://www.uvic.ca/"
        img={{
          src: '/assets/images/Uvic.svg',
          alt: 'Uvic logo',
        }}
        category={
          <>
            <Tags color={ColorTags.ZINC}>GPA: 3.66 / 4.0</Tags>
            <Tags color={ColorTags.ZINC}>2013 - 2018</Tags>
          </>
        }
      />
      <Project
        name="Isfahan University of Technology (IUT)"
        description="Bachelor of Science - Dissertation: Car Rental System Based on the blockchain"
        link="https://english.iut.ac.ir/"
        img={{
          src: '/assets/images/iut.svg',
          alt: 'IUT logo',
        }}
        category={
          <>
            <Tags color={ColorTags.ZINC}>GPA: 3.63 / 4.0</Tags>
            <Tags color={ColorTags.ZINC}>2019 - 2022</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
