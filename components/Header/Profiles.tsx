import { FaDev, FaDribbble, FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import clsx from "clsx";
import type { IconType } from "react-icons";

type Profile = {
  title: string;
  icon: IconType;
  link: string;
  className: string;
};

const profiles: Profile[] = [
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://pillai.xyz/instagram",
    className: "bg-[#e1306c]",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://pillai.xyz/linkedin",
    className: "bg-[#2867b2]",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    link: "https://pillai.xyz/twitter",
    className: "bg-[#1da1f2]",
  },
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: "https://pillai.xyz/github",
    className: "bg-[#211f1f]",
  },
  {
    title: "Dribbble",
    icon: FaDribbble,
    link: "https://pillai.xyz/dribbble",
    className: "bg-[#ea4c89]",
  },
  {
    title: "DEV Community",
    icon: FaDev,
    link: "https://pillai.xyz/dev",
    className: "bg-[#0a0a0a]",
  },
  {
    title: "Facebook",
    icon: FaFacebookF,
    link: "https://pillai.xyz/facebook",
    className: "bg-[#3b5998]",
  },
];

const Profiles: React.FC = () => (
  <div className="h-[22px] mt-5 flex gap-8">
    {profiles.map(({ title, link, icon: Icon, className }, index) => (
      <Tippy key={title} content={title} placement="bottom">
        <span
          className={clsx("p-1 text-sm rounded-full", "animate__animated animate__fadeIn", className)}
          style={{ animationDelay: `${index * 0.5 + 8}s` }}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Icon />
            <span className="sr-only">{title}</span>
          </a>
        </span>
      </Tippy>
    ))}
  </div>
);

export default Profiles;
