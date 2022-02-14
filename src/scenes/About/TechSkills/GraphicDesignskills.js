import s from './GraphicDesignskills.module.scss';
import { 
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
 } from "react-icons/si";
 import { 
  FaFigma,
} from "react-icons/fa";

const GraphicDesignskills = () => {
  return (
    <ul className={s.container}>
      <li className={s.gdtechIcon}>
        <SiAdobephotoshop />
      </li>
      <li className={s.gdtechIcon}>
      <SiAdobeillustrator />
      </li>
      <li className={s.gdtechIcon}>
      <SiAdobexd />
      </li>
      <li className={s.gdtechIcon}>
      <FaFigma />
      </li>
    </ul>
  );
};

export default GraphicDesignskills;
