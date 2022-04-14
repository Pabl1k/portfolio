import React, {useRef, useState} from "react";
import LeftContainer from "../LeftContainer/LeftContainer";
import MiddleContainer from "../MiddleContainer/MiddleContainer";
import RightContainer from "../RightContainer/RightContainer";
import {useTabletScreen} from "../../hooks/useMediaQuery";
import "./Portfolio.scss";

const Portfolio = () => {
  const isTablet = useTabletScreen();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const pageTopRef = useRef(null);
  const stackRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const feedbackRef = useRef(null);

  return (
    <div className="portfolio">
      {(!isTablet || openMenu) && (
        <div className="portfolio__left-container">
          <LeftContainer
            pageTopRef={pageTopRef}
            onCrossClick={() => setOpenMenu(false)}
          />
        </div>
      )}
      {!openMenu && (
        <MiddleContainer
          pageTopRef={pageTopRef}
          stackRef={stackRef}
          workRef={workRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          feedbackRef={feedbackRef}
          onMenuClick={() => setOpenMenu(true)}
        />
      )}
      {!isTablet && (
        <RightContainer
          pageTopRef={pageTopRef}
          stackRef={stackRef}
          workRef={workRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          feedbackRef={feedbackRef}
        />
      )}
    </div>
  );
};

export default Portfolio;
