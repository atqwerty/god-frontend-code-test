import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowInnerWidthSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowInnerWidthSize;
};

export default useWindowSize;
