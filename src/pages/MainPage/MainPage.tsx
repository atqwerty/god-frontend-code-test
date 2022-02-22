import React from "react";
import { View } from "vcc-ui";
import { Carousel } from "./components";

// justifyContent prop of View doesn't work

const MainPage: React.FC = () => {
  return (
    <View
      height={"100%"}
      extend={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View width={"100%"} padding={"0 50px 0 50px"}>
        <Carousel />
      </View>
    </View>
  );
};

export default MainPage;
