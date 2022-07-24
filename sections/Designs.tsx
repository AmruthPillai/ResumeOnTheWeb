import Heading from "components/Heading";
import { DribbbleShot } from "types/Sections";
import ImageLink from "components/ImageLink";
import Button from "components/Button";
import { openURLInNewTab } from "utils";
import links from "data/links";
import { FiDribbble } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";

type Props = {
  dribbbleShots: DribbbleShot[];
};

const Designs: React.FC<Props> = ({ dribbbleShots }) => (
  <div id="designs">
    <Heading icon={FaPaintBrush}>Designs</Heading>

    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
      {dribbbleShots.slice(0, 10).map((media) => (
        <ImageLink
          key={media.id}
          alt={media.title}
          href={media.html_url}
          src={media.images.hidpi}
          dimensions={{ width: 512, height: 512 }}
        />
      ))}
    </div>

    <Button icon={FiDribbble} onClick={() => openURLInNewTab(links.dribbble)} className="mt-8">
      Shots on Dribbble
    </Button>
  </div>
);

export default Designs;
