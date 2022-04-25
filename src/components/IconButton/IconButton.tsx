import React, { FC } from "react";
import Icon, { IconName } from "../Icon/Icon";
import "./IconButton.scss";

type Props = {
  iconName: IconName;
  path: string;
};

const IconButton: FC<Props> = ({ iconName, path }) => {
  return (
    <a
      className="circle-with-icon"
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name={iconName} height="20" width="20" />
    </a>
  );
};

export default IconButton;
