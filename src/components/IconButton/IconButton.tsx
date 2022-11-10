import React, {FC, useState} from "react";
import Icon, { IconName } from "../Icon/Icon";
import "./IconButton.scss";

type Props = {
  iconName: IconName;
  path: string;
};

const IconButton: FC<Props> = ({ iconName, path }) => {
  const [hovered, setHovered] = useState(false);

  const mouseListener = (e: boolean) => {
    if (iconName === "telegram") {
      setHovered(e)
    }
  }

  return (
    <>
      <a
        title={iconName}
        className="circle-with-icon"
        href={path}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => mouseListener(true)}
        onMouseLeave={() => mouseListener(false)}
      >
        <Icon name={iconName} height="20" width="20" />
      </a>
      {hovered && <div className="circle-with-icon__qr"><div className="circle-with-icon__qr-arrow"/></div>}
    </>
  );
};

export default IconButton;
