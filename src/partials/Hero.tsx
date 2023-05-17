import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Ehsan Ghasaei</GradientText> 👋🏻
        </>
      }
      description={
        <>
          I recently graduated from{' '}
          <a
            href="https://uvic.ca"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            UVIC
          </a>{' '}
          😎 in software engineering. I am a team-player, detailed-oriented, and
          self-initiated software developer. I have years of experience in{' '}
          <li>Blockchain research & development</li>
          <li>Software (full-stack) development</li>
          <li>Project management</li>
        </>
      }
      avatar={
        <img
          className="h-80 w-64 rounded-md"
          src="/assets/images/Avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      // socialButtons={
      //   <>
      //     <a href="https://www.linkedin.com/in/ehsanghasaei/" target="_blank">
      //       <HeroSocial
      //         src="/assets/images/linkedin-icon.png"
      //         alt="Linkedin icon"
      //       />
      //     </a>
      //     <Tags color={ColorTags.GRAY}>ehsan.ghasaei@gmail.com</Tags>
      //   </>
      // }
    />
  </Section>
);

export { Hero };
