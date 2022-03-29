import React from "react";
import Icon from "../Icon/Icon";
import Underline from "../Underline/Underline";
import { strings } from "../../utils/strings";
import { state } from "../../utils/state";
import "./ExtraSkills.scss";

const ExtraSkills = () => {
  return (
    <div className="extra-skills">
      <span className="extra-skills__title portfolio-text-medium">
        {strings.extraSkillsText}
      </span>
      {state.extraSkills.map((line, i) => {
        return (
          <div
            className={`extra-skills__inline ${i === 1 && "second"} ${
              i === state.extraSkills.length - 1 && "last-item"
            }`}
            key={i}
          >
            <Icon name="extraSkill" className="extra-skills__icon" />
            <span className="extra-skills__items">{line}</span>
          </div>
        );
      })}
      <Underline />
    </div>
  );
};

export default ExtraSkills;
