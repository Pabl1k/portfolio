import React from "react";
import "./Footer.scss";
import {strings} from "../../utils/strings";
import {useScrollTo} from "../../hooks/useScrollTo";

const Footer = () => {
  function GoToTop() {
    useScrollTo(0);
  }
  return (
    <div className="footer portfolio-text-small">
      <p>
        {strings.footer}{" "}
        <span className="footer__full-name" onClick={GoToTop}>
          {strings.fullName}
        </span>
        , {strings.year}
      </p>
    </div>
  );
};

export default Footer;
