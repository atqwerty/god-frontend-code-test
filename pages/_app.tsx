import { MainPage } from "../src/pages/MainPage";
import "../public/css/styles.css";
import { StyleProvider } from "vcc-ui";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <MainPage />
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
