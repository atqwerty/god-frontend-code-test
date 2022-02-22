import React, { useEffect, useState } from "react";
import { MainPage } from "../src/pages/MainPage";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { StyleContext } from "../src/ui";
import useWindowSize from "../src/api/windowHook";

const defaultStyleValue = {
  logoMargin: "75px 0 0 100px",
  logoHeight: 32,
  carouselPadding: "0 50px 0 50px",
  isMobile: false,
};

function HomePage() {
  const [styling, setStyling] = useState(defaultStyleValue);
  const innerWidth = useWindowSize();

  useEffect(() => {
    if (innerWidth <= 600) {
      setStyling({
        logoMargin: "1em 0 0 1em",
        logoHeight: 16,
        carouselPadding: "1.2em",
        isMobile: true,
      });
    } else setStyling(defaultStyleValue);
  }, [innerWidth]);

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
