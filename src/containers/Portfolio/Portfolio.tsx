import React from "react";
import LeftContainer from "../LeftContainer/LeftContainer";
import MiddleContainer from "../MiddleContainer/MiddleContainer";
import RightContainer from "../RightContainer/RightContainer";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
    </div>
  );
};

export default Portfolio;
