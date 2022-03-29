import React, { FC } from "react";
import "./BlockTitleWithDescription.scss";

type Props = {
  title: string;
  description: string;
};

const BlockTitleWithDescription: FC<Props> = ({ title, description }) => {
  return (
    <div className="block-title-with-description">
      <span className="block-title-with-description__title">{title}</span>
      <span className="block-title-with-description__description portfolio-text-small">
        {description}
      </span>
    </div>
  );
};

export default BlockTitleWithDescription;

