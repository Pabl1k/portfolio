import React, {FC} from "react";
import feedback1 from "../../assets/images/feedback1.jpg";
import feedback2 from "../../assets/images/feedback2.jpg";
import feedback3 from "../../assets/images/feedback3.jpg";
import BlockTitleWithDescription from "../../components/BlockTitleWithDescription/BlockTitleWithDescription";
import {useMobileScreen} from "../../hooks/useMediaQuery";
import {strings} from "../../utils/strings";
import {RefType} from "../../types/state";
import "./Feedback.scss";

type Props = {
  feedbackRef: RefType;
};
const Feedback: FC<Props> = ({ feedbackRef }) => {
  const isMobile = useMobileScreen();

  return (
    <>
      <BlockTitleWithDescription
        title={strings.feedback}
        description={strings.feedbackDescription}
        blockRef={feedbackRef}
      />
      <div className={`feedback ${isMobile && "mobile"}`}>
        <img src={feedback1} alt="feedback from colleague" />
        <img src={feedback2} alt="feedback from colleague" />
        <img src={feedback3} alt="feedback from colleague" />
      </div>
    </>
  );
};

export default Feedback;
