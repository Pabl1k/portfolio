import React from "react";
import About from "../../components/About/About";
import Stack from "../Stack/Stack";
import Experience from "../Experience/Experience";
import Feedback from "../Feedback/Feedback";
import Projects from "../Projects/Projects";
import Footer from "../../components/Footer/Footer";
import { strings } from "../../utils/strings";
import { state } from "../../utils/state";
import "./MiddleContainer.scss";

const MiddleContainer = () => {
  return (
    <div className="middle-container">
      <About />
      <Stack />
      <Experience
        state={state.workHistory}
        title={strings.workHistory}
        description={strings.workHistoryDescription}
      />
      <Experience
        state={state.education}
        title={strings.education}
        description={strings.educationDescription}
      />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
};

export default MiddleContainer;
