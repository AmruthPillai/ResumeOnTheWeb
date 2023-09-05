import clsx from "clsx";
import { BiLinkExternal } from "react-icons/bi";

type Dimensions = { width: number; height: number };

type Props = {
  src: string;
  alt: string;
  href?: string;
  height?: number;
  dimensions?: Dimensions;
  imageClassName?: string;
};

const ImageLink: React.FC<Props> = ({ src, alt, href = "#", height, dimensions, imageClassName }) => (
  <div className="relative overflow-hidden shadow rounded group">
    <a href={href} target="_blank" rel="noreferrer" className="flex">
      {dimensions ? (
        <img
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          className={clsx("rounded shadow-lg object-cover", imageClassName)}
        />
      ) : (
        <div style={{ height }} className="w-full relative rounded shadow-lg overflow-hidden min-h-[250px]">
          <img
            src={src}
            alt={alt}
            width={height! * 2}
            height={height}
            className={clsx("object-cover", imageClassName)}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-neutral-900 text-white opacity-0 flex items-center justify-center transition group-hover:opacity-60">
        <BiLinkExternal fontSize={64} />
      </div>
    </a>
  </div>
);

export default ImageLink;
