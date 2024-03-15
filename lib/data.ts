import React from "react";
import { FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import etaTrackerV2Img from "@/public/eta-tracker-v2.png";
import patientLoopImg from "@/public/patient-loop-page.svg";
import dashBoardImg from "@/public/dashboard.png";
import scmpImg from "@/public/scmp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    institution: "LassoMD | Toronto",
    institutionLink: "https://www.lassomd.com/",
    description:
      "Built a comprehensive solution from scratch to elevate dental practice’s patient acquisition and lead management; Integrated Twilio to handle Calling & Messaging service",
    icon: React.createElement(FaReact),
    date: "May - Dec 2023",
  },
  {
    title: "Full-Stack Developer",
    institution: "SCMP",
    institutionLink: "https://www.scmp.com",
    description:
      "Designed and built a customized collaborative online editing system similar to Google Docs which helps journalists to compose articles in asynchronized manner.",
    icon: React.createElement(FaVuejs),
    date: "Nov 2020 - Sep 2022",
  },
  {
    title: "Software Developer",
    institution: "Prisec",
    institutionLink: "https://www.prisec.co",
    description:
      "Developed an authenticator application on top of the OIDC protocol which keeps the identity of user private throughout the process.",
    icon: React.createElement(FaPython),
    date: "Jan 2019 - Oct 2020",
  },
  {
    title: "Graduate",
    institution: "CUHK",
    institutionLink: "https://www.cuhk.edu.hk/english/index.html",
    description: "Graduated with a Bachelor degree in Information Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Junior Web Developer",
    institution: "TabNext",
    institutionLink: "https://www.tabnext.asia/",
    description: "Learning and crafting reusable & responsive web components.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb - Sep 2018",
  },
] as const;

export const projectsData = [
  {
    title: "ETA Tracker v2",
    description:
      "A simple web app for tracking the ETA of a TTC buses. Bookmarked ETA could be checked instantly without researching the stop number again.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Radix"],
    imageUrl: etaTrackerV2Img,
    link: "https://ttc-next-v2.vercel.app/",
  },
  {
    title: "PatientLoop",
    description:
      "A lead & schedule management tools for dental practices. It helps dentists to visualize their leads and appointments, and to track their marketing efforts.",
    tags: ["Python", "PostgreSQL", "React", "TypeScript", "Next.js", "Docker"],
    imageUrl: patientLoopImg,
    link: "https://www.lassomd.com/",
  },
  {
    title: "Compose - Rich Text Editor",
    description:
      "A rich text editor built from scratch, it supports various text formatting, image sourcing, and link embedding.",
    tags: ["Vue", "Node.js", "MongoDB", "TypeScript", "RabbitMQ"],
    imageUrl: scmpImg,
    link: "https://www.scmp.com/sport/rugby/hk-sevens/article/3198601/hong-kong-sevens-2022-live-coverage-day-3-quarter-finals-get-under-way",
  },
  {
    title: "Core Web Vitals and SEO Tracker",
    description:
      "An internal dashboard for tracking Core Web Vitals and SEO metrics of websites. It helps to monitor the performance of websites.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
    ],
    imageUrl: dashBoardImg,
    link: "https://cstool.dev.lmdplatform.com/domain",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "GCP",
  "Vercel",
] as const;
