import React from "react";

const defaultStyleValue = {
  logoMargin: "75px 0 0 100px",
  logoHeight: "32",
  carouselPadding: "0 50px 0 50px",
  isMobile: false,
};

export const StyleContext = React.createContext(defaultStyleValue);

export default StyleContext;
