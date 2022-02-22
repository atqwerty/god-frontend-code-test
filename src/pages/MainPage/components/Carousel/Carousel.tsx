import React, { useState, useContext } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronCircled, StyleContext } from "../../../../../src/ui";
import { CarItem, NotFoundCard, SearchBar } from "./components";
import { View, Spacer } from "vcc-ui";
import Dots from "react-carousel-dots";

interface CarouselProps {
  cars: {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ cars }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [carsToRender, setCarsToRender] = useState(cars);
  const styling = useContext(StyleContext);
  const chevronWidth = 50;

  return (
    <View>
      {carsToRender.length > 0 ? (
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          gutter={20}
          numberOfCards={window.innerWidth <= 600 ? 1 : 4}
          leftChevron={<ChevronCircled rotationDegree="180deg" />}
          rightChevron={<ChevronCircled />}
          outsideChevron
          showSlither={styling.isMobile}
          chevronWidth={chevronWidth}
          alwaysShowChevrons
          classes={{
            wrapper: "carousel_wrapper",
            itemsWrapper: "items_wrapper",
            rightChevronWrapper: "right_chevron",
            leftChevronWrapper: "left_chevron",
          }}
        >
          {carsToRender.map((car) => {
            return <CarItem key={car.id} carInfo={car} />;
          })}
        </ItemsCarousel>
      ) : (
        <NotFoundCard />
      )}
      <View extend={{ marginTop: "1em", alignItems: "center" }}>
        {styling.isMobile && (
          <Dots
            length={carsToRender.length}
            active={activeItemIndex}
            visible={carsToRender.length}
            size={10}
            margin={5}
          />
        )}
        <Spacer size={2} />
        <SearchBar
          callback={(value) =>
            setCarsToRender(
              cars.filter((car) => car.bodyType.includes(value.toLowerCase()))
            )
          }
        />
      </View>
    </View>
  );
};

export default Carousel;
