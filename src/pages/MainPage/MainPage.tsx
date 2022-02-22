import React, { useState, useEffect, useContext } from "react";
import { StyleContext } from "../../ui";
import { View, Spinner, Logo } from "vcc-ui";
import { Carousel } from "./components";
import { getCars } from "../../api/carRequest";

const MainPage: React.FC = () => {
  const [cars, setCars] = useState([]);
  const styling = useContext(StyleContext);

  useEffect(() => {
    if (cars.length === 0) {
      getCars()
        .then((res) => {
          setTimeout(() => setCars(res), 500);
        })
        .catch((err) => console.log(err));
    }
  }, [cars]);

  return (
    <View
      extend={{
        height: "100%",
        justifyContent: "center",
      }}
    >
      {cars.length > 0 && (
        <View
          extend={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: styling.logoMargin,
          }}
        >
          <Logo type="spreadmark" height={styling.logoHeight} />
        </View>
      )}
      <View padding={styling.carouselPadding}>
        {cars.length > 0 ? (
          <Carousel cars={cars} />
        ) : (
          <React.Fragment>
            <View extend={{ alignSelf: "center", justifySelf: "center" }}>
              <Spinner size={48} />
            </View>
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default MainPage;
