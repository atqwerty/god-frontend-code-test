import React, { useState, useEffect } from "react";
import { View, Spinner, Logo } from "vcc-ui";
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
      <View
        extend={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: "75px 0 0 100px",
        }}
      >
        <Logo type="spreadmark" height="32" />
      </View>
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
