import React from "react";
import me from "../../assets/images/me.jpg";
import { useMobileScreen, useTabletScreen } from "../../hooks/useMediaQuery";
import { strings } from "../../utils/strings";
import "./About.scss";

const About = () => {
  const isMobile = useMobileScreen();
  const isTablet = useTabletScreen();

  return (
    <div className="about">
      {isMobile && (
        <div className="about__me-img-container">
          <img src={me} alt="me" />
        </div>
      )}
      <div className="about__name-container">
        <span className="about__text">
          {strings.im} {strings.fullName}{" "}
          <span className="about__text gold">
            {strings.position.slice(0, 9)}
          </span>{" "}
          {strings.position.slice(10)}
        </span>
      </div>
      <div
        className={`about__description ${!isTablet && "portfolio-text-small"}`}
      >
        {strings.about}
      </div>
    </div>
  );
};

export default About;
