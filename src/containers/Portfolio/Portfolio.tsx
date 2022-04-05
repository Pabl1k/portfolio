import React, {useState} from "react";
import LeftContainer from "../LeftContainer/LeftContainer";
import MiddleContainer from "../MiddleContainer/MiddleContainer";
import RightContainer from "../RightContainer/RightContainer";
import {useTabletScreen} from "../../hooks/useMediaQuery";
import "./Portfolio.scss";

const Portfolio = () => {
  const isTablet = useTabletScreen();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="portfolio">
      {(!isTablet || openMenu) && (
        <div className="portfolio__left-container">
          <LeftContainer onCrossClick={() => setOpenMenu(false)} />
        </div>
      )}
      {!openMenu && <MiddleContainer onMenuClick={() => setOpenMenu(true)} />}
      {!isTablet && <RightContainer />}
    </div>
  );
};

export default Portfolio;
