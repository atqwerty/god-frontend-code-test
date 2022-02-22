import { MainPage } from "../src/pages/MainPage";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker>
          <MainPage />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
