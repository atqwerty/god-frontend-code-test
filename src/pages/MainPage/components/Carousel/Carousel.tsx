import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronCircled } from "../../../../../src/ui";
import { CarItem } from "./components";
import { View } from "vcc-ui";

const Carousel: React.FC = ({ cars }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  return (
    <View>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        gutter={20}
        numberOfCards={4}
        leftChevron={<ChevronCircled rotationDegree="180deg" />}
        rightChevron={<ChevronCircled />}
        outsideChevron
        infiniteLoop
        chevronWidth={chevronWidth}
        classes={{
          wrapper: "carousel_wrapper",
          itemsWrapper: "items_wrapper",
          rightChevronWrapper: "right_chevron",
          leftChevronWrapper: "left_chevron",
        }}
      >
        {cars.map((car) => {
          return <CarItem carInfo={car} />;
        })}
      </ItemsCarousel>
    </View>
  );
};

export default Carousel;
