import React from "react";
import { strings } from "../../utils/strings";
import "./CVButton.scss";

const CVButton = () => {
  return (
    <a
      className="cv-button portfolio-disable-text-selection"
      href="https://drive.google.com/file/d/1ypDnnj1-JPkI8xX5eomyUZ3TDGjMEtZ8/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
    >
      {strings.openCV.toUpperCase()}
    </a>
  );
};

export default CVButton;
