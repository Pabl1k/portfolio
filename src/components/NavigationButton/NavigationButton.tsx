import React, { FC } from "react";
import { useStartWithCapital } from "../../hooks/useStartWithCapital";
import Icon, { IconName } from "../Icon/Icon";
import "./NavigationButton.scss";

type Props = {
  icon: IconName;
  isActive: boolean;
  onClick: () => void;
};

const NavigationButton: FC<Props> = ({ icon, onClick, isActive }) => {
  const buttonName = useStartWithCapital(icon);
  const isWorkIcon = icon === "work";
  return (
    <div className="navigation-button">
      {isActive && (
        <div className="navigation-button__title portfolio-disable-text-selection">
          <div className="navigation-button__triangle" />
          <span>{buttonName}</span>
        </div>
      )}
      <button
        className={`navigation-button__button ${isActive && "active"}`}
        title={isActive ? "" : buttonName}
        onClick={isActive ? () => {} : onClick}
      >
        <Icon name={icon} height={isWorkIcon ? "24": "18"} width={isWorkIcon ? "24": "18"} />
      </button>
    </div>
  );
};

export default NavigationButton;
