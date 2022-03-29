import React, { FC } from "react";

import "./PercentageScale.scss";

type Props = {
  title: string;
  percentage: number;
};

const PercentageScale: FC<Props> = ({ title, percentage }) => {
  return (
    <div className="percentage-scale">
      <div className="percentage-scale__title portfolio-text-small">
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <div className="percentage-scale__container">
        <div
          className="percentage-scale__line"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default PercentageScale;
