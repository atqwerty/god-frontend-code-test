import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronCircled } from "../../../../../src/ui";

const Carousel: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  return (
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={4}
      gutter={20}
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
      <div style={{ height: 440, background: "#EEE" }}>First card</div>
      <div style={{ height: 440, background: "#EEE" }}>Second card</div>
      <div style={{ height: 440, background: "#EEE" }}>Third card</div>
      <div style={{ height: 440, background: "#EEE" }}>Fourth card</div>
    </ItemsCarousel>
  );
};

export default Carousel;
