import React, { FC } from "react";
import PercentageScale from "../../components/PercentageScale/PercentageScale";
import Underline from "../../components/Underline/Underline";
import { ScaleStateType } from "../../types/state";
import "./PercentageScaleContainer.scss";

type Props = {
  title: string;
  state: ScaleStateType[];
};

const PercentageScaleContainer: FC<Props> = ({ title, state }) => {
  return (
    <div className="percentage-scale-container">
      <span className="percentage-scale-container__title portfolio-text-medium ">
        {title}
      </span>
      {state.map((item, i) => {
        return (
          <div className="percentage-scale-container__single-item" key={i}>
            <PercentageScale title={item.skillName} percentage={item.level} />
          </div>
        );
      })}
      <Underline />
    </div>
  );
};

export default PercentageScaleContainer;
