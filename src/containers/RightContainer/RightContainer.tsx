import React, { FC, useEffect, useState } from "react";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import { useScrollTo } from "../../hooks/useScrollTo";
import { IconName } from "../../components/Icon/Icon";
import { RefType } from "../../types/state";
import "./RightContainer.scss";

type Props<T = RefType> = {
  pageTopRef: T;
  stackRef: T;
  workRef: T;
  educationRef: T;
  projectsRef: T;
  feedbackRef: T;
};

type StateType = {
  name: IconName;
  ref: RefType;
};

const RightContainer: FC<Props> = ({
  pageTopRef,
  stackRef,
  workRef,
  educationRef,
  projectsRef,
  feedbackRef,
}) => {
  const rightContainerState: StateType[] = [
    { name: "about", ref: pageTopRef },
    { name: "stack", ref: stackRef },
    { name: "work", ref: workRef },
    { name: "education", ref: educationRef },
    { name: "projects", ref: projectsRef },
    { name: "feedback", ref: feedbackRef },
  ];

  const [selected, setSelected] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);

  const ScrollTo = (ref: HTMLDivElement) => {
    useScrollTo(ref);
  };
  const currentScrollY = () => {
    setCurrentY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", currentScrollY, { passive: true });
    return () => {
      window.removeEventListener("scroll", currentScrollY);
    };
  }, []);

  useEffect(() => {
    if (stackRef.current && stackRef.current?.offsetTop - 150 > currentY) {
      setSelected(0);
    }
    if (stackRef.current && stackRef.current?.offsetTop - 150 < currentY) {
      setSelected(1);
    }
    if (workRef.current && workRef.current?.offsetTop - 150 < currentY) {
      setSelected(2);
    }
    if (
      educationRef.current &&
      educationRef.current?.offsetTop - 150 < currentY
    ) {
      setSelected(3);
    }
    if (
      projectsRef.current &&
      projectsRef.current?.offsetTop - 150 < currentY
    ) {
      setSelected(4);
    }
    if (
      feedbackRef.current &&
      feedbackRef.current?.offsetTop - 150 < currentY
    ) {
      setSelected(5);
    }
  }, [currentY]);

  return (
    <div className="right-container">
      <div className="right-container__navigation-container">
        {rightContainerState.map((opt, i) => {
          return (
            <NavigationButton
              key={i}
              icon={opt.name}
              isActive={selected === i}
              onClick={() => {
                if (opt.ref?.current) {
                  ScrollTo(opt.ref.current);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RightContainer;
