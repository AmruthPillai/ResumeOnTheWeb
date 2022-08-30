import { useCallback, useEffect, useState } from "react";

type WindowDimensions = { width: number; height: number };

export enum Breakpoints {
  "xs" = 0,
  "sm" = 576,
  "md" = 768,
  "lg" = 992,
  "xl" = 1200,
  "2xl" = 1400,
}

const useWindowDimensions = (): WindowDimensions => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;

    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow, getWindowDimensions]);

  return windowDimensions;
};

export default useWindowDimensions;
