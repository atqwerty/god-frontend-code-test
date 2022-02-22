import React from "react";
import { View } from "vcc-ui";
import { Carousel } from "./components";

// justifyContent prop of View doesn't work

const MainPage: React.FC = () => {
  return (
    <View
      extend={{
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View padding={"0 50px 0 50px"}>
        <Carousel />
      </View>
    </View>
  );
};

export default MainPage;
