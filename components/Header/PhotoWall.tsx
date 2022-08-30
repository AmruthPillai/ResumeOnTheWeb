import { css } from "@emotion/css";
import clsx from "clsx";
import Image from "next/image";

const photos: string[] = [
  "/images/photo-wall/photo-3jn2.jpg",
  "/images/photo-wall/photo-7sm2.jpg",
  "/images/photo-wall/photo-9ns6.jpg",
  "/images/photo-wall/photo-2js9.jpg",
];

type Props = {
  size?: number;
};

const PhotoWall: React.FC<Props> = ({ size = 512 }) => {
  return (
    <div className="flex gap-1" style={{ width: size, height: size }}>
      {photos.map((photo, index) => (
        <div
          key={photo}
          style={{ animationDelay: `${index * 0.5 + 0.5}s` }}
          className={clsx(
            "relative transition-[width]",
            "animate__animated animate__fadeInDown",
            css`
              width: ${size / 4}px;
              height: ${size}px;
              &:hover {
                width: ${size / 2}px;
              }
            `
          )}
        >
          <Image
            priority
            src={photo}
            layout="fill"
            objectFit="cover"
            className={clsx({ "rounded-l": index === 0, "rounded-r": index === photos.length - 1 })}
            alt="Amruth Pillai"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoWall;
