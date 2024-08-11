import FaceboogSVG from "../../imgs/social-media-svgs/FaceboogSVG";
import LinkedinSVG from "../../imgs/social-media-svgs/LinkedinSVG";
import TwitterSVG from "../../imgs/social-media-svgs/TwitterSVG";
import YoutubeSVG from "../../imgs/social-media-svgs/YoutubeSVG";
import manImg from "../../imgs/man.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <p className="about__title">
          Hi there, I’m <span className="aqua-gradient">Roma</span>👋
        </p>

        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, <span className="aqua-gradient">consectetur</span>{" "}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et{" "}
          <span className="aqua-gradient">dolore</span>.
        </p>

        <div className="about__social-media">
          <TwitterSVG className={"about__social-media-SVG"}/>
          <FaceboogSVG className={"about__social-media-SVG"}/>
          <LinkedinSVG className={"about__social-media-SVG"}/>
          <YoutubeSVG  className={"about__social-media-SVG"}/>
        </div>
      </div>

      <img src={manImg} alt="man" className="about__man-img" />
    </div>
  );
};

export default About;
