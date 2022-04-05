import React, {FC} from "react";
import Profile from "../../components/Profile/Profile";
import Information from "../../components/Information/Information";
import PercentageScaleContainer from "../PercentageScaleContainer/PercentageScaleContainer";
import ExtraSkills from "../../components/ExtraSkills/ExtraSkills";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import MenuButton from "../../components/MenuButton/MenuButton";
import {useTabletScreen} from "../../hooks/useMediaQuery";
import {strings} from "../../utils/strings";
import {state} from "../../utils/state";
import "./LeftContainer.scss";

type Props = {
  onCrossClick: () => void;
};

const LeftContainer: FC<Props> = ({ onCrossClick }) => {
  const isTablet = useTabletScreen();

  return (
    <div className="left-container">
      {isTablet && <MenuButton icon="cross" onClick={onCrossClick} />}
      <Profile />
      <Information />
      <PercentageScaleContainer
        title={strings.languagesText}
        state={state.languages}
      />
      <PercentageScaleContainer
        title={strings.skillsText}
        state={state.skills}
      />
      <ExtraSkills />
      <DownloadButton />
    </div>
  );
};

export default LeftContainer;
