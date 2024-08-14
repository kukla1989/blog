import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import GithubSVG from "../../imgs/SVGs/GithubSVG";
import LinkedinSVG from "../../imgs/SVGs/LinkedinSVG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__stroke"></div>

      <div className="footer__text">{new Date().getFullYear()} Kukla Blog</div>

      <div className="footer__links">
        <FontAwesomeIcon
          icon={faTelegram}
          className="footer__icon footer__telegram"
        />
        <GithubSVG className="footer__icon footer__github" />
        <LinkedinSVG className="footer__icon footer__linkedin" />
      </div>
    </div>
  );
};

export default Footer;
