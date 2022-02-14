import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { SiFreelancer } from 'react-icons/si';
import { 
  FaFacebookSquare,
  FaLinkedinIn ,
 } from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Ameehamz</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} Ameehamz</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/AmeeHamz"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.freelancer.pk/u/Ameehumz"
                target="_blank"
                rel="noreferrer"
              >
                <SiFreelancer />
              </a>
            </li>
            <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/ameer-hamza-ab31b6229/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
