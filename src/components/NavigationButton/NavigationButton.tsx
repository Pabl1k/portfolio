import React, { FC } from "react";
import Icon, { IconName } from "../Icon/Icon";
import "./NavigationButton.scss";

type Props = {
  icon: IconName;
  isActive: boolean;
  onClick: () => void;
};

const NavigationButton: FC<Props> = ({ icon, onClick, isActive }) => {
  const iconSize = (icon: string): "24" | "22" | "18" => {
    if (icon === "work") {
      return "24";
    } else if (icon === "about") {
      return "22";
    } else {
      return "18";
    }
  };

  const startWithCapital = (value: string) => {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  };

  return (
    <div className="navigation-button">
      {isActive && (
        <div className="navigation-button__title portfolio-disable-text-selection">
          <div className="navigation-button__triangle" />
          <span className="navigation-button__button-name">{icon}</span>
        </div>
      )}
      <button
        className={`navigation-button__button ${isActive && "active"}`}
        title={isActive ? undefined : startWithCapital(icon)}
        onClick={isActive ? () => {} : onClick}
      >
        <Icon name={icon} height={iconSize(icon)} width={iconSize(icon)} />
      </button>
    </div>
  );
};

export default NavigationButton;
