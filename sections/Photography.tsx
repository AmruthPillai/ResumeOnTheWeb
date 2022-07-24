import Heading from "components/Heading";
import { InstagramMedia } from "types/Sections";
import ImageLink from "components/ImageLink";
import Button from "components/Button";
import { openURLInNewTab } from "utils";
import links from "data/links";
import { MdCamera } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

type Props = {
  instagramMedia: InstagramMedia[];
};

const Photography: React.FC<Props> = ({ instagramMedia }) => (
  <div id="photography">
    <Heading icon={MdCamera}>Photography</Heading>

    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
      {instagramMedia
        .filter((media) => media.media_type === "IMAGE")
        .slice(0, 10)
        .map((media) => {
          // CDN Subdomain Replacement Hack for whitelisted URLs in next/image
          // (https://github.com/vercel/next.js/discussions/18429#discussioncomment-989303)
          const src = media.media_url.replace(/^[^.]*/, "https://scontent");

          return (
            <ImageLink
              src={src}
              key={media.id}
              href={media.permalink}
              dimensions={{ width: 512, height: 512 }}
              alt={`${media.id} - Amruth Pillai`}
            />
          );
        })}
    </div>

    <Button icon={FaInstagram} className="mt-8" onClick={() => openURLInNewTab(links.instagram)}>
      Photos on Instagram
    </Button>
  </div>
);

export default Photography;
