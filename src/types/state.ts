import { IconName } from "../components/Icon/Icon";
import {MutableRefObject} from "react";

export type ProfileStateType = {
  socialNetwork: IconName;
  link: string;
};

export type InformationStateType = {
  key: string;
  value?: string;
};

export type ScaleStateType = {
  skillName: string;
  level: number;
};

export type StackStateType = {
  technology: string;
  icon: IconName;
};

export type ExperienceStateType = {
  position: string;
  period: string;
  description: string;
  description2?: string;
};

export type ProjectsStateType = {
  name: string;
  img:
    | "Coingate"
    | "EmailPage"
    | "TodoList"
    | "UserChat"
    | "CardsLearning"
    | "ThisPortfolio"
    | "DnDTodolist";
  description: string;
  label?: string;
  github: `https://${string}`;
};

export type RefType = MutableRefObject<HTMLDivElement | null>
