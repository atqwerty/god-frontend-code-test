import React from "react";
import { View } from "vcc-ui";

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
      <div style={{ background: "green", width: "500px", height: "300px" }}>
        adsf
      </div>
    </View>
  );
};

export default MainPage;
