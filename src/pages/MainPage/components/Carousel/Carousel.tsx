import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { ChevronCircled } from "../../../../../src/ui";
import { CarItem, SearchBar } from "./components";
import { View, Spacer, Card, CardContent, Text } from "vcc-ui";

const Carousel: React.FC = ({ cars }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [carsToRender, setCarsToRender] = useState(cars);
  const chevronWidth = 50;

  return (
    <View>
      {carsToRender.length > 0 ? (
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
          {carsToRender.map((car) => {
            return <CarItem key={car.id} carInfo={car} />;
          })}
        </ItemsCarousel>
      ) : (
        <Card>
          <CardContent>
            <Text variant="ootah">Sorry...</Text>
            <Spacer />
            <Text>No such car exists right now...</Text>
          </CardContent>
        </Card>
      )}
      <Spacer />
      <SearchBar
        callback={(value) =>
          setCarsToRender(cars.filter((car) => car.bodyType.includes(value)))
        }
      />
    </View>
  );
};

export default Carousel;
