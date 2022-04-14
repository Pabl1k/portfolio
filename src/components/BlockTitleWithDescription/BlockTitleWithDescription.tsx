import React, {FC} from "react";
import {RefType} from "../../types/state";
import "./BlockTitleWithDescription.scss";

type Props = {
  title: string;
  description: string;
  blockRef?: RefType;
};

const BlockTitleWithDescription: FC<Props> = ({
  title,
  description,
  blockRef,
}) => {
  return (
    <div className="block-title-with-description">
      <span className="block-title-with-description__title" ref={blockRef}>
        {title}
      </span>
      <span className="block-title-with-description__description portfolio-text-small">
        {description}
      </span>
    </div>
  );
};

export default BlockTitleWithDescription;
