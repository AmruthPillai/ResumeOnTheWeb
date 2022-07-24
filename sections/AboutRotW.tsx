import Button from "components/Button";
import Heading from "components/Heading";
import links from "data/links";
import { openURLInNewTab } from "utils";
import { MdInfo, MdStar } from "react-icons/md";

const AboutRotW = () => (
  <div id="about-rotw">
    <Heading icon={MdInfo}>About Resume on the Web</Heading>

    <div className="w-full lg:w-3/4 max-w-full prose prose-neutral dark:prose-invert">
      <p>
        <strong>Resume on the Web</strong> has been a project that I&apos;ve been focused on since the early 2014s. I
        didn&apos;t want my information to be displayed on just a sheet of paper that only HRs or Talent Scouts had the
        privilege of reading, I wanted it to be accessible to everyone. And that&apos;s how this project was
        conceptualized.
      </p>

      <p>
        I constantly update it to match who I am, because just like this website, I don&apos;t have a static
        personality. I use the latest technologies and use this platform to challenge myself into learning new
        frameworks, new build tools, experiment with new design ideas while keeping the core principle of getting to
        know me as simple as possible.
      </p>

      <p>
        This version of the project was built using NextJS (React), Tailwind CSS for their utility-first classes and
        Firebase to host the site.
      </p>

      <p>
        I hope you loved the site as much as I enjoyed developing it and learning from it. If you did, please let me
        know using the contact form above, I would be ecstatic to hear from you.
      </p>

      <p>
        If you would like to peek around the code and see what makes this website tick, the complete source code can be
        found on GitHub. You can even edit it to make your own version of the site, as this project is copylefted under
        the permissive MIT License.
      </p>
    </div>

    <Button icon={MdStar} className="mt-8" onClick={() => openURLInNewTab(links.github)}>
      Star this Project on GitHub
    </Button>
  </div>
);

export default AboutRotW;