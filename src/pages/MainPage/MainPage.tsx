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
      <View width={"1200px"} height={"500px"}>
        <Carousel />
      </View>
    </View>
  );
};

export default MainPage;
