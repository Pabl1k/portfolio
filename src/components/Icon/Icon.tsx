import { FC } from "react";
import { ReactSVG } from "react-svg";

export type IconName =
  | "about"
  | "cross"
  | "css"
  | "download"
  | "education"
  | "extraSkill"
  | "feedback"
  | "git"
  | "github"
  | "gmail"
  | "home"
  | "html"
  | "js"
  | "linkedin"
  | "menu"
  | "projects"
  | "react"
  | "redux"
  | "stack"
  | "telegram"
  | "ts"
  | "work";

type Props = {
  name: IconName;
  alt?: string;
  className?: string;
  height?: string;
  width?: string;
};

const Icon: FC<Props> = ({ name, alt, className, height, width }) => {
  return (
    <ReactSVG
      wrapper="span"
      aria-label={alt ? alt : `${name} icon`}
      className={className}
      style={{ lineHeight: 0 }}
      src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
      beforeInjection={(svg) => {
        svg.setAttribute("width", width ?? svg.getAttribute("width") ?? "");
        svg.setAttribute("height", height ?? svg.getAttribute("height") ?? "");
      }}
    />
  );
};

export default Icon;
