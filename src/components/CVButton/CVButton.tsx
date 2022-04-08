import React from "react";
import { strings } from "../../utils/strings";
import "./CVButton.scss";

const CVButton = () => {
  return (
    <a
      className="cv-button portfolio-disable-text-selection"
      href="https://pavel-zaplatkin-cv.tiiny.site/"
      target="_blank"
    >
      {strings.openCV.toUpperCase()}
    </a>
  );
};

export default CVButton;
