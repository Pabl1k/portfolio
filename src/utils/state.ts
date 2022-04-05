import {
  ExperienceStateType,
  InformationStateType,
  ProfileStateType,
  ProjectsStateType,
  RightContainerStateType,
  ScaleStateType,
  StackStateType,
} from "../types/state";
import {strings} from "./strings";

export const state = {
  profile: [
    {
      socialNetwork: "linkedin",
      link: "https://www.linkedin.com/in/pavel-zaplatkin-13403619b/",
    },
    { socialNetwork: "gmail", link: "mailto:pavezap@gmail.com" },
    { socialNetwork: "github", link: "https://github.com/Pabl1k" },
    { socialNetwork: "telegram", link: "https://t.me/Pabl1k1" },
  ] as ProfileStateType[],
  information: [
    { key: strings.age },
    { key: strings.nationality, value: strings.languages[2] },
    { key: strings.freelance, value: strings.available },
    { key: strings.location, value: strings.place },
  ] as InformationStateType[],
  languages: [
    { skillName: strings.languages[0], level: 100 },
    { skillName: strings.languages[1], level: 80 },
    { skillName: strings.languages[2], level: 60 },
  ] as ScaleStateType[],
  skills: [
    { skillName: strings.skill[0], level: 75 },
    { skillName: strings.skill[1], level: 60 },
    { skillName: strings.skill[2], level: 70 },
    { skillName: strings.skill[3], level: 70 },
    { skillName: strings.skill[4], level: 80 },
    { skillName: strings.skill[5], level: 85 },
  ] as ScaleStateType[],
  extraSkills: [
    `${strings.extraSkill[0]}, ${strings.extraSkill[1]}, ${strings.extraSkill[2]}, ${strings.extraSkill[3]}`,
    `${strings.extraSkill[9]}, ${strings.extraSkill[10]}`,
    `${strings.extraSkill[11]}, ${strings.extraSkill[12]}`,
    `${strings.extraSkill[4]}, ${strings.extraSkill[5]}, ${strings.extraSkill[6]}`,
    `${strings.extraSkill[7]}, ${strings.extraSkill[8]}`,
  ] as string[],
  stack: [
    { technology: strings.skill[0], icon: "react" },
    { technology: strings.skill[1], icon: "redux" },
    { technology: strings.skill[2], icon: "ts" },
    { technology: strings.skill[3], icon: "js" },
    { technology: strings.skill[4], icon: "html" },
    { technology: strings.skill[5], icon: "css" },
  ] as StackStateType[],
  workHistory: [
    {
      position: `${strings.junior} ${strings.position}`,
      period: strings.workPeriod,
      description: strings.workDescription,
    },
    {
      position: `${strings.intern} ${strings.position}`,
      period: strings.internPeriod,
      description: strings.internDescription1,
      description2: strings.internDescription2,
    },
  ] as ExperienceStateType[],
  education: [
    {
      position: strings.course,
      period: strings.coursePeriod,
      description: strings.courseDescription,
    },
    {
      position: strings.highSchool,
      period: strings.highSchoolPeriod,
      description: strings.highSchoolDescription,
    },
  ] as ExperienceStateType[],
  projects: [
    {
      name: strings.cryptoName,
      url: "https://crypto-calculators.herokuapp.com/",
      img: "Coingate",
      description: strings.cryptoDescription,
      github: "https://github.com/Pabl1k/currencyCalculator",
    },
    {
      name: strings.emailPageName,
      url: "https://my-email-page.herokuapp.com/",
      img: "EmailPage",
      description: strings.emailPageDescription,
      github: "https://github.com/Pabl1k/emailPage",
    },
    {
      name: strings.todoListName,
      url: "https://i-have-what-to-do.herokuapp.com/",
      img: "TodoList",
      description: strings.todoListDescription,
      github: "https://github.com/Pabl1k/todo-list",
    },
    {
      name: strings.userChatName,
      url: "",
      img: "UserChat",
      description: strings.userChatDescription,
      github: "https://github.com/Pabl1k/user-chat",
    },
    {
      name: strings.learnCardsName,
      url: "https://pabl1k.github.io/cardsLearning/",
      img: "CardsLearning",
      description: strings.learnCardsDescription,
      label: strings.teamWork,
      github: "https://github.com/Pabl1k/cardsLearning",
    },
  ] as ProjectsStateType[],
  rightContainer: [
    { name: "home", Y: 0 },
    { name: "stack", Y: 555 },
    { name: "work", Y: 1280 },
    { name: "education", Y: 1924 },
    { name: "projects", Y: 2468 },
    { name: "feedback", Y: 4009 },
  ] as RightContainerStateType[],
};
