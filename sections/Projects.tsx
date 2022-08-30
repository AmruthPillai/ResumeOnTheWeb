import Tippy from "@tippyjs/react";
import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import projectsList from "data/projects";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const Projects = () => (
  <div id={Section.Projects}>
    {getSectionHeading(Section.Projects)}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsList.map((project) => (
        <div key={project.id} className="flex flex-col gap-2">
          <ImageLink
            alt={project.name}
            src={project.image}
            dimensions={{ width: 500, height: 250 }}
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

    <Button icon={FaGithub} className="mt-8" onClick={() => openURLInNewTab(links.github)}>
      Projects on GitHub
    </Button>
  </div>
);

export default Projects;
