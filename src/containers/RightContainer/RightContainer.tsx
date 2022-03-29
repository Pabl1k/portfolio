import React, {useEffect, useState} from "react";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import {useScrollTo} from "../../hooks/useScrollTo";
import {state} from "../../utils/state";
import "./RightContainer.scss";

const RightContainer = () => {
  const [selected, setSelected] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);

  function ScrollTo(y: number) {
    useScrollTo(y);
  }
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
    if (currentY < 400) setSelected(0);
    if (currentY >= 400) setSelected(1);
    if (currentY >= 1140) setSelected(2);
    if (currentY >= 1830) setSelected(3);
    if (currentY >= 2410) setSelected(4);
    if (currentY >= 3980) setSelected(5);
  }, [currentY]);

  return (
    <div className="right-container">
      <div className="right-container__navigation-container">
        {state.rightContainer.map((opt, i) => {
          return (
            <NavigationButton
              key={i}
              icon={opt.name}
              isActive={selected === i}
              onClick={() => {
                ScrollTo(opt.Y);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RightContainer;
