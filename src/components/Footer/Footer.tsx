import React, { FC } from "react";
import { strings } from "../../utils/strings";
import { useScrollTo } from "../../hooks/useScrollTo";
import { RefType } from "../../types/state";
import "./Footer.scss";

type Props = {
  goToTopRef: RefType;
};
const Footer: FC<Props> = ({ goToTopRef }) => {
  function GoToTop(ref: HTMLDivElement) {
    useScrollTo(ref);
  }
  return (
    <div className="footer portfolio-text-small">
      <p>
        {strings.footer}{" "}
        <span
          className="footer__full-name"
          onClick={() => {
            if (goToTopRef.current) {
              GoToTop(goToTopRef.current);
            }
          }}
        >
          {strings.fullName}
        </span>
        {strings.year}
      </p>
    </div>
  );
};

export default Footer;
