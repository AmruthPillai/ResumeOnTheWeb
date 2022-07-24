import Button from "components/Button";
import Heading from "components/Heading";
import ImageLink from "components/ImageLink";
import { openURLInNewTab } from "utils";
import links from "data/links";
import { FaFilePdf } from "react-icons/fa";

const Resume = () => (
  <div id="resume">
    <Heading icon={FaFilePdf}>Resume</Heading>

    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full flex-1">
        <ImageLink
          height={300}
          href={links.resume}
          src="/images/resume/cover.jpg"
          alt="Amruth Pillai's Resume on Print"
        />
      </div>

      <div className="flex flex-col items-start gap-8 flex-[2]">
        <div className="max-w-full prose prose-2xl prose-neutral dark:prose-invert">
          <h4>
            To those HRs out there who need a more organized and minimal version of my information, you can download the
            trusted PDF version here:
          </h4>
        </div>

        <div>
          <Button onClick={() => openURLInNewTab(links.resume)}>Download Resume</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
