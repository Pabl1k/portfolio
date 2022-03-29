import React from "react";
import "./DownloadButton.scss";
import { strings } from "../../utils/strings";

const DownloadButton = () => {
  return (
    <a
      className="download-button portfolio-disable-text-selection"
      href=""
      target="_blank"
    >
      {strings.openCV.toUpperCase()}
    </a>
  );
};

export default DownloadButton;
