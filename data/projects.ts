import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/reactive-resume.jpg",
    name: "Reactive Resume",
    summary:
      "A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever.",
    tags: ["opensource", "webdev", "fullstack", "react", "nestjs", "tailwindcss"],
    link: {
      web: "https://rxresu.me",
      github: "https://github.com/AmruthPillai/Reactive-Resume",
    },
  },
  {
    id: 2,
    image: "/images/projects/time-enna.jpg",
    name: "Time Enna",
    summary:
      "A fun experiement to understand the ache that is handling Dates and Time Zones on the frontend. Allows you to check the current time of multiple timezones at once, with a unique UI experience.",
    tags: ["opensource", "react", "dayjs", "tailwindcss"],
    link: {
      web: "https://timeenna.com",
      github: "https://github.com/AmruthPillai/Time-Enna",
    },
  },
  {
    id: 3,
    image: "/images/projects/be-thrifty-today.jpg",
    name: "Be Thrifty Today",
    summary:
      "Be Thrifty Today is a simple and secure money management app that helps you track your incomes and expenses.",
    tags: ["opensource", "appdev", "flutter", "firebase", "android"],
    link: {
      web: "https://play.google.com/store/apps/details?id=today.bethrifty.app",
      github: "https://github.com/AmruthPillai/BeThriftyToday",
    },
  },
  {
    id: 4,
    image: "/images/projects/all-the-words-that-i-know.jpg",
    name: "All The Words That I Know",
    summary:
      "A simple game to test your vocabulary and your memory, with a little bit of fun. Let's see what are all the words that you know?",
    tags: ["opensource", "webdev", "gamedev", "react", "tailwindcss"],
    link: {
      web: "https://ap-all-the-words-that-i-know.web.app/",
      github: "https://github.com/AmruthPillai/All-The-Words-That-I-Know",
    },
  },
  {
    id: 5,
    image: "/images/projects/mutual-fund-calculator.jpg",
    name: "Mutual Fund Calculator",
    summary:
      "A mutual fund investment calculator which allows you to track your SIP and Lumpsum investments and using real historical NAV data from AMFI.",
    tags: ["opensource", "fintech", "scraping", "python", "angular"],
    link: {
      github: "https://github.com/AmruthPillai/MutualFund-Investment-Calculator",
    },
  },
  {
    id: 6,
    image: "/images/projects/madrasi-bride.jpg",
    name: "Madrasi Bride",
    summary:
      "A wedding blog/magazine focused on making the bride and groom's day as memorable as possible by sourcing the best of content.",
    tags: ["wordpress", "webdev", "php", "mysql", "seo"],
  },
];

export default projectsList;
