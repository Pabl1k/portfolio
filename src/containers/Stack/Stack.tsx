import React from "react";
import BlockTitleWithDescription from "../../components/BlockTitleWithDescription/BlockTitleWithDescription";
import Icon from "../../components/Icon/Icon";
import { state } from "../../utils/state";
import { strings } from "../../utils/strings";
import "./Stack.scss";

const Stack = () => {
  return (
    <>
      <BlockTitleWithDescription
        title={strings.myStack}
        description={strings.stackDescription}
      />
      <div className="stack">
        <div className="stack__container">
          {state.stack.map((tech, i) => {
            return (
              <div
                key={i}
                className="stack__single-item portfolio-disable-text-selection"
              >
                <Icon name={tech.icon} height="78" width="78" />
                <span className="portfolio-text-medium">
                  {tech.technology.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Stack;
