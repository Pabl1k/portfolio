import React, { FC } from "react";
import About from "../../components/About/About";
import Stack from "../Stack/Stack";
import Experience from "../Experience/Experience";
import Feedback from "../Feedback/Feedback";
import Projects from "../Projects/Projects";
import Footer from "../../components/Footer/Footer";
import MenuButton from "../../components/MenuButton/MenuButton";
import MobileScrollToTop from "../../components/MobileScrollToTop/MobileScrollToTop";
import { useTabletScreen } from "../../hooks/useMediaQuery";
import { strings } from "../../utils/strings";
import { state } from "../../utils/state";
import { RefType } from "../../types/state";
import "./MiddleContainer.scss";

type Props<T = RefType> = {
  pageTopRef: T;
  stackRef: T;
  workRef: T;
  educationRef: T;
  projectsRef: T;
  feedbackRef: T;
  onMenuClick: () => void;
};

const MiddleContainer: FC<Props> = ({
  pageTopRef,
  stackRef,
  workRef,
  educationRef,
  projectsRef,
  feedbackRef,
  onMenuClick,
}) => {
  const isTablet = useTabletScreen();

  return (
    <div className="middle-container">
      {isTablet && <MenuButton icon="menu" onClick={onMenuClick} />}
      {isTablet && <MobileScrollToTop />}
      <About />
      <Stack stackRef={stackRef} />
      <Experience
        state={state.workHistory}
        title={strings.workHistory}
        description={strings.workHistoryDescription}
        experienceRef={workRef}
      />
      <Experience
        state={state.education}
        title={strings.education}
        description={strings.educationDescription}
        experienceRef={educationRef}
      />
      <Projects projectsRef={projectsRef} />
      <Feedback feedbackRef={feedbackRef} />
      <Footer goToTopRef={pageTopRef} />
    </div>
  );
};

export default MiddleContainer;
