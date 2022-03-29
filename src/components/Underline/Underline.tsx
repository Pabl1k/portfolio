import React, { FC } from "react";

import "./Underline.scss";

const Underline: FC<{ noMargin?: boolean }> = ({ noMargin }) => {
  return <div className={`underline ${noMargin && "no-margin"}`} />;
};

export default Underline;
