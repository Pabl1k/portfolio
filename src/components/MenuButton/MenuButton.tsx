import React, { FC } from "react";
import Icon from "../Icon/Icon";
import "./MenuButton.scss";

type Props = {
  icon: "menu" | "cross";
  onClick: () => void;
};

const MenuButton: FC<Props> = ({ icon, onClick }) => {
  return (
    <button
      className={`menu-button ${icon === "cross" && "absolute"}`}
      onClick={onClick}
    >
      <Icon name={icon} height="30" width="30" />
    </button>
  );
};

export default MenuButton;
