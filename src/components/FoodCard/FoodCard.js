import React, { useState } from "react";
import "./FoodCard.css";
import veg from "../../assets/veg.png";
import AddItem from "../AddItem/AddItem";
import AfterButton from "../Button/AfterButton";

import { useDispatch } from "react-redux";
import { cartactions } from "../../store/cart-slice";
import { IMAGE_URL } from "../../constants/swiggy.general";

const FoodCard = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(
      cartactions.addItemToCart({
        id: item.card.info.id,
        title: item.card.info.name,
        price: item.card.info.price / 100,
      })
    );
  };

 
  const menuArray =
    props.passMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
      (items) => items?.card?.card?.itemCards
    );

  const idsArray = props.passId;

  console.log(props.passId);

  const onAdd = (index) => {
    props.setcounter(props.counter + 1);
    props.additems(true);
  };

  return (
    <div className="food-card">
      {idsArray?.map((items, index) => {
        return (
          <>
            <div className="food">
              <div className="food-info">
                <img src={veg} />

                <h3>{items?.card?.info?.name}</h3>
                <h4>₹{items?.card?.info?.price / 100}</h4>
                <h5>{items?.card?.info?.description}</h5>
              </div>

              <div className="food-image">
                <img
                  alt="image not found"
                  src={`${IMAGE_URL}/${items?.card?.info?.imageId}`}
                />
                <button
                  id="add-button"
                  onClick={() => {
                    addToCartHandler(items);
                    onAdd(index);
                    props.addToCart(items, items.card.info.price / 100);
                    props.addMenu(items.card.info);
                  }}
                  style={{ border: "1px solid gray" }}
                >
                  <div className="add">Add</div>
                  <div className="plus">+</div>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FoodCard;
