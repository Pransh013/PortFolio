import Gemini from "../assets/Gemini.png";
import SocialSync from "../assets/SocialSync.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css-3.png";
import JsLogo from "../assets/js.png";
import ReactSvg from "../assets/react.svg";
import TailwindSvg from "../assets/tailwindcss.svg";
import TypeScriptSvg from "../assets/typescript.svg";
import NodeJsSvg from "../assets/nodejs.svg";
import GitSvg from "../assets/git.svg";
import MongoDbSvg from "../assets/mongodb.svg";
import ExpressJsSvg from "../assets/express.svg";
import JavaSvg from "../assets/java.svg";
import CPP from "../assets/cpp.svg";
import PostgreSQL from "../assets/postgresql.svg";
import Prisma from "../assets/prisma.svg";
import Workers from "../assets/C_Workers.png";
import Hono from "../assets/Hono.png";
import SwiggyImg from "../assets/SwiggyImg.png";

const projects = [
  {
    title: "Gemini Clone",
    description:
      "A Google Gemini clone built with React, TypeScript and Gemini API.",
    image: Gemini,
    liveDemoUrl: "https://gemini-clone-pr.vercel.app/",
    githubUrl: "https://github.com/Pransh013/Gemini-Clone",
  },
  {
    title: "Swiggy Clone",
    description:
      "A Swiggy frontend clone built using ReactJS, TailwindCSS and Zustand for state management.",
    image: SwiggyImg,
    liveDemoUrl: "https://swiggyyy.vercel.app/",
    githubUrl: "https://github.com/9xVibee/SwiggyyyClone",
  },
  {
    title: "SocialSync",
    description:
      "A social media app developed using React, TypeScript, Appwrite, Tanstack Query and TailwindCSS.",
    image: SocialSync,
    liveDemoUrl: "https://socialsyncc.vercel.app/",
    githubUrl: "https://github.com/Pransh013/SocialSync",
  },
  {
    title: "Gemini Clone",
    description:
      "A google Gemini Clone built in ReactJS, TailwindCSS and TypeScript",
    image: Gemini,
    liveDemoUrl: "https://gemini-clone-pr.vercel.app/",
    githubUrl: "https://github.com/Pransh013/Gemini-Clone",
  },
];

export default projects;

export const SkillsInfo = [
  {
    name: "JavaScript",
    Logo: JsLogo,
  },
  {
    name: "TypeScript",
    Logo: TypeScriptSvg,
  },
  {
    name: "ReactJS",
    Logo: ReactSvg,
  },
  {
    name: "TailwindCSS",
    Logo: TailwindSvg,
  },
  {
    name: "NodeJS",
    Logo: NodeJsSvg,
  },
  {
    name: "ExpressJS",
    Logo: ExpressJsSvg,
  },
  {
    name: "MongoDB",
    Logo: MongoDbSvg,
  },
  {
    name: "PostgreSQL",
    Logo: PostgreSQL,
  },
  {
    name: "Prisma",
    Logo: Prisma,
  },
  {
    name: "Hono",
    Logo: Hono,
  },
  {
    name: "Cloudflare Workers",
    Logo: Workers,
  },
  {
    name: "HTML",
    Logo: HtmlLogo,
  },
  {
    name: "CSS",
    Logo: CssLogo,
  },
  {
    name: "Git",
    Logo: GitSvg,
  },
  {
    name: "Java",
    Logo: JavaSvg,
  },
  {
    name: "C++",
    Logo: CPP,
  },
];

interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Skills",
    href: "/#skills",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export interface User {
  fullName: string;
  email: string;
  message: string;
}

export const socials: NavItem[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/pransshhh/",
  },
  {
    title: "GitHub",
    href: "https://github.com/Pransh013",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/pranshu98865108",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/pransh.jsx/",
  },
];

export const getTimeInAMPMFormat = () => {
  const date: Date = new Date();
  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();
  let seconds: number | string = date.getSeconds();
  const ampm: string = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeInAMPM: string =
    hours + " : " + minutes + " : " + seconds + " " + ampm;
  return timeInAMPM;
};
