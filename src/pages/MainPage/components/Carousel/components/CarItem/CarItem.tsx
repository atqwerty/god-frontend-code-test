import React from "react";
import { View, Inline, Text, Spacer, Link, useTheme } from "vcc-ui";

interface CarInfoProps {
  carInfo: any;
}

const CarItem: React.FC<CarInfoProps> = ({ carInfo }) => {
  const theme = useTheme();

  return (
    <View>
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
      <View>
        <img src={carInfo.imageUrl} />
      </View>
      <Spacer size={{ default: 4, "@media (max-width: 768px)": 8 }} />
      <View
        extend={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridGap: "20px",
          justifyItems: "center",
        }}
      >
        <View extend={{ justifySelf: "end" }}>
          <Link href={"/learn/" + carInfo.id} arrow="right">
            Learn
          </Link>
        </View>
        <View extend={{ justifySelf: "start" }}>
          <Link href={"/shop/" + carInfo.id} arrow="right">
            Shop
          </Link>
        </View>
      </View>
    </View>
  );
};

export default CarItem;
