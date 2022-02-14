import s from './TechSkills.module.scss';
import {
  DiReact,
  DiMongodb,
  DiSass,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from 'react-icons/di';
import {
  SiWordpress,
  SiExpress,
} from 'react-icons/si';
import {
  IoLogoNodejs,
  IoLogoJavascript,
} from 'react-icons/io';

const TechSkills = () => {
  return (
    <ul className={s.container}>
    <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <IoLogoJavascript />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <SiExpress />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <IoLogoNodejs />
      </li>
      <li className={s.techIcon}>
        <SiWordpress />
      </li>
    </ul>
  );
};

export default TechSkills;
