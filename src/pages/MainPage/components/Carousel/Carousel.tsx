import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronCircled } from "../../../../../src/ui";
import { getCars } from "../../../../api/carRequest";
import { CarItem } from "./components";

const Carousel: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [cars, setCars] = useState([]);
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
      {cars.length > 0 &&
        cars.map((car) => {
          return <CarItem carInfo={car} />;
        })}
    </ItemsCarousel>
  );
};

export default Carousel;
