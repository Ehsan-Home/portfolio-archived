import { GradientText, Section } from 'astro-boilerplate-components';

import ProgressBar from './ProgressBar';

const Skills = () => {
  return (
    <Section title={<GradientText>Skills</GradientText>}>
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <ProgressBar name="React" prec={90} />
      </div>
    </Section>
  );
};

export default Skills;
