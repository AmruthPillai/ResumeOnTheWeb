import Heading from "components/Heading";
import { InstagramMedia } from "types/Sections";
import ImageLink from "components/ImageLink";
import Button from "components/Button";
import { openURLInNewTab } from "utils";
import { MdCamera } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

type Props = {
  instagramMedia: InstagramMedia[];
};

const Photography: React.FC<Props> = ({ instagramMedia }) => {
  return (
    <div id="photography">
      <Heading icon={MdCamera}>Photography</Heading>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {instagramMedia
          .filter((media) => media.media_type === "IMAGE")
          .slice(0, 10)
          .map((media) => (
            <ImageLink
              size={240}
              key={media.id}
              src={media.media_url}
              href={media.permalink}
              alt={`${media.id} - Amruth Pillai`}
            />
          ))}
      </div>

      <div className="mt-5 inline-block">
        <Button icon={FaInstagram} onClick={() => openURLInNewTab("https://pillai.xyz/instagram")}>
          Photos on Instagram
        </Button>
      </div>
    </div>
  );
};

export default Photography;
