import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronCircled } from "../../../../../src/ui";
import { getCars } from "../../../../api/carRequest";

const Carousel: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [cars, setCars] = useState([]);
  console.log(cars);
  const chevronWidth = 50;

  useEffect(() => {
    getCars()
      .then((res) => setCars(res))
      .catch((err) => console.log(err));
  }, []);

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
      {cars.map((car) => {
        return (
          <div style={{ height: 440, background: "#EEE" }}>{car.bodyType}</div>
        );
      })}
    </ItemsCarousel>
  );
};

export default Carousel;
