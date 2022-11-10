import React from "react";
import me from "../../assets/images/me2.png";
import { useMobileScreen, useTabletScreen } from "../../hooks/useMediaQuery";
import { strings } from "../../utils/strings";
import "./About.scss";

const About = () => {
  const isMobile = useMobileScreen();
  const isTablet = useTabletScreen();

  return (
    <header className="about">
      {isMobile && (
        <div className="about__me-img-container">
          <img
            src={me}
            alt={strings.fullName}
            title={strings.fullName}
            width="200"
            height="300"
          />
        </div>
      )}
      <div className="about__name-container">
        <h1
          className="about__text"
          title={`${strings.fullName} ${strings.position}`}
        >
          {strings.im} {strings.fullName}{" "}
          <span className="about__text gold">
            {strings.position.slice(0, 9)}
          </span>{" "}
          {strings.position.slice(10)}
        </h1>
      </div>
      <div
        className={`about__description ${!isTablet && "portfolio-text-small"}`}
      >
        {strings.about}
      </div>
    </header>
  );
};

export default About;
