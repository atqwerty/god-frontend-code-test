import React, { useEffect, useState } from "react";
import { MainPage } from "../src/pages/MainPage";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { StyleContext } from "../src/ui";

const defaultStyleValue = {
  logoMargin: "75px 0 0 100px",
  logoHeight: "32",
  carouselPadding: "0 50px 0 50px",
  isMobile: false,
};

function HomePage() {
  const [styling, setStyling] = useState(defaultStyleValue);
  // const [windowInnerWidth] = useState(window.innerWidth);
  const innerWidth = useWindowSize();

  useEffect(() => {
    if (innerWidth <= 600) {
      setStyling({
        logoMargin: "1em 0 0 1em",
        logoHeight: "16",
        carouselPadding: "1.2em",
        isMobile: true,
      });
    } else setStyling(defaultStyleValue);
  }, [innerWidth]);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowInnerWidthSize, setWindowSize] = useState(0);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowInnerWidthSize;
  }

  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker>
          <StyleContext.Provider value={styling}>
            <MainPage />
          </StyleContext.Provider>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
