import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANTS_API } from "../../constants/swiggy.general";
import AddItem from "../AddItem/AddItem";
import Header from "../Header/Header";
import MenuCard from "../MenuCard/MenuCard";
import "./Restaurant.css";

const Restaurant = (props) => {
  console.log(props);

  const [addItem, setAddItem] = useState(false);
  const [counter, setCounter] = useState(0);

  const [restInfo, setRestInfo] = useState([]);
  const restid = useParams().id;

  const fetchData = async () => {
    try {
      let rawdata = await fetch(
        `${RESTAURANTS_API}restaurantId=${restid}&submitAction=ENTER`
      );
      let data = await rawdata.json();
      console.log(restInfo);
      setRestInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header counter={counter}/>
      <div className="rest-info">
        <>
          <div className="title-div">
            <div className="rest-title">
              <h3>{restInfo?.data?.cards[0]?.card?.card?.info?.name}</h3>
              <h5>
                {restInfo?.data?.cards[0]?.card?.card?.info?.cuisines[0]},{" "}
                {restInfo?.data?.cards[0]?.card?.card?.info?.cuisines[1]}
              </h5>
              <h5>{restInfo?.data?.cards[0]?.card?.card?.info?.areaName}</h5>
            </div>

            <div className="rest-rating">
              <button>
                <span style={{ color: "green", fontWeight: "500" }}>
                  ⭑ {restInfo?.data?.cards[0]?.card?.card?.info?.avgRating}
                </span>
                <hr />
                <span>
                  {
                    restInfo?.data?.cards[0]?.card?.card?.info
                      ?.totalRatingsString
                  }
                </span>
              </button>
            </div>
          </div>

          <div className="other-details">
            <div className="other-details-time">
              <svg
                style={{ marginRight: "7px" }}
                class="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  stroke-width="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>24 MINS</span>
            </div>

            <div className="other-deatils-price">
              <svg
                style={{ marginRight: "7px" }}
                class="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8.25"
                  stroke="#3E4152"
                  stroke-width="1.5"
                ></circle>
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>
                {restInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
              </span>
            </div>
          </div>

          {/* <div className="discount-labels">
                {restInfo?.data?.cards[0]?.card?.card?.info?.aggregatedDiscountInfoV2?.descriptionListmap((discount) => {
                  return (
                    <button>
                      <div>
                        <div
                          style={{
                            fontWeight: "600",
                            textAlign: "left",
                            width: "100%",
                          }}
                        >
                          {discount.meta}
                        </div>
                        <div
                          style={{
                            color: "gray",
                            textAlign: "left",
                            width: "100%",
                          }}
                        >
                          {discount.meta}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div> */}

          <div className="food-veg">PURE VEG</div>

          <div className="rest-menu">
            <MenuCard
              counter={counter}
              setcounter={setCounter}
              additem={setAddItem}
              onPass={restInfo}
              addToCart={props.addToCart}
              addMenu={props.addMenu}
            />
          </div>
          {addItem && <AddItem counter={counter} onPass={restInfo} />}
        </>
      </div>
    </div>
  );
};
export default Restaurant;
