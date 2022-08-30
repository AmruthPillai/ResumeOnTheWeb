import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/elara.svg",
    name: "Elara Digital GmbH",
    period: { start: "Jul 22", end: "Present" },
    position: "Senior Frontend Developer",
    location: "Berlin, Germany",
    summary: "",
    keyFocus: ["React", "Tailwind CSS", "GraphQL (Hasura)", "Building Reusable Design Components"],
  },
  {
    id: 2,
    logo: "/images/work-experience/twilio.svg",
    name: "Twilio Inc.",
    period: { start: "Jan 22", end: "Jun 22" },
    position: "Senior Frontend Developer",
    location: "Berlin, Germany",
    summary:
      "As part of the IoT Console team, my roles and responsibilities were to build, test and maintain the console dashboard for IoT Devices that are purchased/rented from Twilio.",
    keyFocus: ["React", "Cypress (Automation Testing)", "Scala", "Process Management", "In-Depth Documentation"],
  },
  {
    id: 3,
    logo: "/images/work-experience/grover.svg",
    name: "Grover Group GmbH",
    period: { start: "Apr 21", end: "Jan 22" },
    position: "Frontend Developer",
    location: "Berlin, Germany",
    summary:
      "As part of the Dashboard Squad, I was tasked to build user engagement features, tackle user support issues and incidents faced across the e-commerce platform, and design/build pages that were used for marketing new and exciting product launches.",
    keyFocus: [
      "React/React Native",
      "NestJS",
      "GSAP Animation Library",
      "Agile Sprint Planning",
      "Incident Management",
    ],
  },
  {
    id: 4,
    logo: "/images/work-experience/postman.svg",
    name: "Postman Technologies Pvt. Ltd.",
    period: { start: "Jun 20", end: "Apr 21" },
    position: "Software Engineer",
    location: "Bangalore, India",
    summary:
      "As an engineer of the Collaboration Squad, it is our responsibility to build more collaborative features into the Postman App we all know and love. From working with workspaces to allowing users to easily comment on individual entities, building features and streamlined interfaces where developers could build and document their product APIs without barriers was our motto.",
    keyFocus: ["React", "SailsJS", "State Management with MobX", "Project Management (Agile)"],
  },
  {
    id: 5,
    logo: "/images/work-experience/dhiyo.svg",
    name: "GoDhiyo Solutions Pvt. Ltd.",
    period: { start: "Jul 18", end: "Mar 20" },
    position: "Full Stack Engineer",
    location: "Bangalore, India",
    summary:
      "I was responsible for a number of development and non-development activities regarding the upliftment of the business. I worked on the latest technologies and frameworks including Python, Scala, Javascript, Flutter, etc., managed multiple people who were delegated tasks, and attended fairs and meetups to engage with users from all walks of life to use the application developed.",
    keyFocus: [
      "Angular 2+",
      "NodeJS (w/ TypeScript)",
      "React/React Native/Redux",
      "Figma (UI/UX Design)",
      "Dialogflow Chatbot Design",
      "Actions on Google",
      "Google Cloud Platform",
      "Amazon Web Services",
    ],
  },
  {
    id: 6,
    logo: "/images/work-experience/betsol.svg",
    name: "BETSOL Software (India) Pvt. Ltd.",
    period: { start: "Jan 18", end: "Mar 18" },
    position: "Javascript Web Developer Intern",
    location: "Bangalore, India",
    summary:
      "Working with BETSOL as an Intern, I was given the responsibility to build a full-stack web application for an internal purpose (HR Tech) which helped the company manage its employees and their skills in a smarter way than the current method. It was a successful project where I learned a lot about working in a team professionally and also managing a team to delegate tasks efficiently.",
    keyFocus: [
      "AngularJS",
      "NodeJS",
      "MongoDB (w/ Mongoose ORM)",
      "Adobe XD (UI/UX Design)",
      "Project Management (Agile)",
      "Version Control",
    ],
  },
  {
    id: 7,
    logo: "/images/work-experience/grabhouse.svg",
    name: "Grabhouse Pvt. Ltd.",
    period: { start: "Jan 16", end: "Feb 16" },
    position: "PHP Web Developer Intern",
    location: "Bangalore, India",
    summary:
      "At Grabhouse, I was in charge of maintaining their website written in a PHP framework, Yii2. I had to fix bugs on the site, manage migrations on the database and also create and manage a mass media marketing website using WordPress for their internal media house.",
    keyFocus: [
      "PHP",
      "Laravel",
      "Yii2 Framework",
      "WordPress Multi-site Management",
      "Python Scripting for Automation Bots",
    ],
  },
  {
    id: 8,
    logo: "/images/work-experience/cognitive-clouds.svg",
    name: "Cognitive Clouds Pvt. Ltd.",
    period: { start: "May 14", end: "Jun 14" },
    position: "Visual Designer Intern",
    location: "Bangalore, India",
    summary:
      "At Grabhouse, I was in charge of maintaining their website written in a PHP framework, Yii2. I had to fix bugs on the site, manage migrations on the database and also create and manage a mass media marketing website using WordPress for their internal media house.",
    keyFocus: [
      "PHP",
      "Laravel",
      "Yii2 Framework",
      "WordPress Multi-site Management",
      "Python Scripting for Automation Bots",
    ],
  },
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-[40px]">
        <Image src={data.logo} layout="fill" objectFit="contain" alt={data.name} />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
