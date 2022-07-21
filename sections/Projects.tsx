import Heading from "components/Heading";
import ImageLink from "components/ImageLink";
import projectsList from "data/projects";
import Button from "components/Button";
import { openURLInNewTab } from "utils";
import Tippy from "@tippyjs/react";
import { BiLinkExternal } from "react-icons/bi";
import { FaDev, FaGithub } from "react-icons/fa";

const Projects = () => (
  <div id="projects">
    <Heading icon={FaDev}>Projects</Heading>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsList.map((project) => (
        <div key={project.id} className="flex flex-col gap-2">
          <ImageLink
            size={250}
            alt={project.name}
            src={project.image}
            href={project.link?.web || project.link?.github}
          />

          <h4 className="text-lg font-bold">{project.name}</h4>

          <p className="prose prose-sm prose-neutral dark:prose-invert">{project.summary}</p>

          <p className="text-xs leading-relaxed font-bold">{project.tags.map((tag) => `#${tag}`).join(" ")}</p>

          {project.link && (
            <div className="mt-1 flex gap-5">
              {project.link.web && (
                <Tippy content="Visit Website" placement="bottom">
                  <a href={project.link.web} target="_blank" rel="noreferrer">
                    <BiLinkExternal fontSize={18} />
                  </a>
                </Tippy>
              )}

              {project.link.github && (
                <Tippy content="Checkout Source Code" placement="bottom">
                  <a href={project.link.github} target="_blank" rel="noreferrer">
                    <FaGithub fontSize={18} />
                  </a>
                </Tippy>
              )}
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="mt-5 inline-block">
      <Button icon={FaGithub} onClick={() => openURLInNewTab("https://pillai.xyz/github")}>
        Projects on GitHub
      </Button>
    </div>
  </div>
);

export default Projects;
