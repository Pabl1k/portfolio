import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import "./MobileScrollToTop.scss";

const MobileScrollToTop = () => {
  const [currentY, setCurrentY] = useState<number>(0);
  const isActive: boolean = currentY > 880;

  const currentScrollY = () => {
    setCurrentY(window.scrollY);
  };

  const goToTop = (): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", currentScrollY, { passive: true });
    return () => {
      window.removeEventListener("scroll", currentScrollY);
    };
  }, []);

  return isActive ? (
    <button className="mobile-scroll-to-top" onClick={() => goToTop()}>
      <Icon name="arrowUp" height="30" width="30" />
    </button>
  ) : null;
};

export default MobileScrollToTop;
