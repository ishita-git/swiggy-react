import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";

import { RESTAURANTS_IMAGE, SWIGGY_API } from "../../constants/swiggy.general";
import RestaurantsLoader from "../../components/Loader/RestaurantsLoader";
import HomeHeader from "./components/HomeHeader";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurantList, setRestaurentList] = useState([]);

  const fetchRest = async () => {
    try {
      const lat = "12.9684517";
      const lang = "77.70943749999999";
      let rawdata = await fetch(
        `${SWIGGY_API}?lat=${lat}&lng=${lang}&offset=31
        &sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
      );
      let data = await rawdata.json();

      setRestaurentList((restaurantList) => [
        ...restaurantList,
        ...data.data.cards,
      ]);
      setIsLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRest();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-header">
          <h3>1487 restaurants</h3>
          <HomeHeader />
        </div>

        <div className="hr-line">
          <hr style={{ position: "relative", width: "90%", marginTop: "5%" }} />
        </div>
      </div>

      {isLoading && (
        <div className="home-content">
          {restaurantList.map((restaurant) => {
            return (
              <Card
                image={`${RESTAURANTS_IMAGE}/${restaurant.data.data.cloudinaryImageId}`}
                title={restaurant.data.data.name}
                price={restaurant.data.data.costForTwoString}
                time={restaurant.data.data.slaString}
                sub={restaurant.data.data.cuisines[0]}
                rating={restaurant.data.data.avgRating}
                id={restaurant.data.data.id}
              />
            );
          })}
        </div>
      )}
      {!isLoading && (
        <div className="loader">
          <RestaurantsLoader />
        </div>
      )}
    </>
  );
};

export default Home;
