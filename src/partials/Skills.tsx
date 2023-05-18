import { GradientText, Section } from 'astro-boilerplate-components';

import ProgressBar from './ProgressBar';

const Skills = () => {
  return (
    <Section title={<GradientText>Skills</GradientText>}>
      <div className="rounded-md bg-slate-800 p-3 ">
        <h5 className="text-xl font-bold dark:text-white">Frontend</h5>
        <div className="flex flex-wrap md:flex-row">
          <ProgressBar name="JavaScript" prec={90} />
          <ProgressBar name="TypeScript" prec={80} />
          <ProgressBar name="React" prec={80} />
          <ProgressBar name="Solid" prec={75} />
          <ProgressBar name="HTML" prec={90} />
          <ProgressBar name="CSS" prec={70} />
          <ProgressBar name="Ant-design" prec={95} />
          <ProgressBar name="Bootstrap" prec={90} />
          <ProgressBar name="NextJS" prec={70} />
          <ProgressBar name="tRPC" prec={60} />
          <ProgressBar name="NPM" prec={80} />
          <ProgressBar name="Vite" prec={70} />
        </div>

        <h5 className="text-xl font-bold dark:text-white">Backend</h5>
        <div className="flex flex-wrap md:flex-row">
          <ProgressBar name="Python" prec={80} />
          <ProgressBar name="Django" prec={75} />
          <ProgressBar name="AWS" prec={70} />
          <ProgressBar name="SQL" prec={70} />
          <ProgressBar name="NO-SQL" prec={60} />
        </div>

        <h5 className="text-xl font-bold dark:text-white">Tech</h5>
        <div className="flex flex-wrap md:flex-row">
          <ProgressBar name="Blockchain" prec={90} />
          <ProgressBar name="Git" prec={80} />
          <ProgressBar name="Rest API" prec={85} />
          <ProgressBar name="Agile" prec={80} />
          <ProgressBar name="Scrum" prec={70} />
          <ProgressBar name="Linux" prec={70} />
        </div>

        <h5 className="text-xl font-bold dark:text-white">DevOps</h5>
        <div className="flex flex-wrap md:flex-row">
          <ProgressBar name="Docker" prec={70} />
          <ProgressBar name="GitHub Actions" prec={60} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
