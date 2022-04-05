import React from "react";
import BlockTitleWithDescription from "../../components/BlockTitleWithDescription/BlockTitleWithDescription";
import { strings } from "../../utils/strings";
import { state } from "../../utils/state";
import Coingate from "../../assets/images/coingate.png";
import EmailPage from "../../assets/images/emailPage.png";
import TodoList from "../../assets/images/todoList.png";
import UserChat from "../../assets/images/userChat.png";
import CardsLearning from "../../assets/images/cardsLearning.png";
import { useMobileScreen, useTabletScreen } from "../../hooks/useMediaQuery";
import "./Projects.scss";

const Projects = () => {
  const isMobile = useMobileScreen();
  const isTablet = useTabletScreen();

  return (
    <>
      <BlockTitleWithDescription
        title={strings.projects}
        description={strings.projectsDescription}
      />
      <div className="projects">
        {state.projects.map((state, i) => {
          return (
            <div
              className={`projects__single-item ${
                (isMobile || isTablet) && i >= 1 && "marginTop"
              } ${!isMobile && i > 1 && "marginTop"}`}
              key={i}
            >
              {state.label && (
                <div className="projects__label">
                  <div className="projects__triangle" />
                  {state.label}
                </div>
              )}
              <a href={state.url} target="_blank">
                <img
                  src={
                    (state.img === "Coingate" && Coingate) ||
                    (state.img === "EmailPage" && EmailPage) ||
                    (state.img === "TodoList" && TodoList) ||
                    (state.img === "UserChat" && UserChat) ||
                    (state.img === "CardsLearning" && CardsLearning)
                  }
                  alt={state.name}
                />
              </a>
              <span className="projects__title portfolio-text-medium">
                {state.name}
              </span>
              <span className="projects__description portfolio-text-small">
                {state.description}
              </span>
              <a
                className="projects__github portfolio-text-small"
                href={state.github}
                target="_blank"
              >
                {strings.openGithub}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
