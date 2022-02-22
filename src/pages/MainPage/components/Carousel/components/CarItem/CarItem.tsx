import React from "react";
import { View, Inline, Text, Spacer, useTheme } from "vcc-ui";

interface CarInfoProps {
  carInfo: any;
}

const CarItem: React.FC<CarInfoProps> = ({ carInfo }) => {
  const theme = useTheme();

  return (
    <View key={carInfo.id} height={"440px"}>
      <Text
        extend={{
          fontWeight: "600 !important", // worked before, but got overwritten, so i had to use a hack
          color: theme.color.foreground.secondary,
        }}
      >
        {carInfo.bodyType.toUpperCase()}
      </Text>
      <Inline>
        <Text
          extend={{
            fontWeight: "600 !important", // same here
            display: "inline",
            color: theme.color.foreground.primary,
            fontSize: "22px !important", // same here
          }}
        >
          {carInfo.modelName + " "}
        </Text>
        <Text
          extend={{
            display: "inline",
            color: theme.color.foreground.secondary,
            fontSize: "22px !important", // same here
          }}
        >
          {carInfo.modelType}
        </Text>
      </Inline>
      <Spacer size={{ default: 4, "@media (max-width: 768px)": 8 }} />
      <img src={carInfo.imageUrl} />
    </View>
  );
};

export default CarItem;
