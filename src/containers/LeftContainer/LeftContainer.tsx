import React from "react";
import Profile from "../../components/Profile/Profile";
import Information from "../../components/Information/Information";
import PercentageScaleContainer from "../PercentageScaleContainer/PercentageScaleContainer";
import ExtraSkills from "../../components/ExtraSkills/ExtraSkills";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import {strings} from "../../utils/strings";
import {state} from "../../utils/state";
import "./LeftContainer.scss";

const LeftContainer = () => {
  return (
    <div className="left-container">
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
