import React from "react";
import {strings} from "../../utils/strings";
import "./About.scss";

const About= () => {
  return (
    <div className="about">
      <div className="about__name-container">
        <span className="about__text">
          {strings.im} {strings.fullName}{" "}
          <span className="about__text gold">
            {strings.position.slice(0, 9)}
          </span>{" "}
          {strings.position.slice(10)}
        </span>
      </div>
      <div className="about__description portfolio-text-small">
        {strings.about}
      </div>
    </div>
  );
};

export default About;
