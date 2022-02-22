import React, { useState, useEffect } from "react";
import { View, Spinner } from "vcc-ui";
import { Carousel } from "./components";
import { getCars } from "../../api/carRequest";

// justifyContent prop of View doesn't work

const MainPage: React.FC = () => {
  const [cars, setCars] = useState([]);
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
      <View padding={"0 50px 0 50px"}>
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
