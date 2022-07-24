import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

type Dimensions = { width: number; height: number };

type Props = {
  src: string;
  alt: string;
  href?: string;
  height?: number;
  dimensions?: Dimensions;
};

const ImageLink: React.FC<Props> = ({ src, alt, href = "#", height, dimensions }) => (
  <div className="relative overflow-hidden rounded group">
    <a href={href} target="_blank" rel="noreferrer">
      {dimensions ? (
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          width={dimensions.width}
          height={dimensions.height}
          className="border border-neutral-50/20 rounded shadow-lg"
        />
      ) : (
        <div
          style={{ height }}
          className="relative border border-neutral-50/20 rounded shadow-lg overflow-hidden min-h-[250px]"
        >
          <Image src={src} layout="fill" objectFit="cover" alt={alt} />
        </div>
      )}
      <div className="absolute inset-0 bg-neutral-900 opacity-0 flex items-center justify-center transition group-hover:opacity-60">
        <BiLinkExternal fontSize={64} />
      </div>
    </a>
  </div>
);

export default ImageLink;
