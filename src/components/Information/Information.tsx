import React from "react";
import Underline from "../Underline/Underline";
import { useMyAge } from "../../hooks/useMyAge";
import { state } from "../../utils/state";
import "./Information.scss";

const Information = () => {
  const myAge: number = useMyAge("1997-01-30");

  return (
    <div className="information">
      {state.information.map((item, i) => {
        return (
          <div className="information__single-item" key={i}>
            <span className="information__text key portfolio-text-small">
              {item.key}:
            </span>
            <span
              className={`information__text ${
                item.key === "Freelance" ? "available" : ""
              } portfolio-text-small`}
            >
              {item.key === "Age" ? myAge : item.value}
            </span>
          </div>
        );
      })}
      <Underline />
    </div>
  );
};

export default Information;
