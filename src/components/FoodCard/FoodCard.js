import { useDispatch } from "react-redux";
import map from "lodash/map";
import React, { useCallback } from "react";

import { cartactions } from "../../store/cart-slice";

import "./FoodCard.css";
import { IMAGE_URL } from "../../constants/swiggy.general";
import RestReader from "../../readers/swiggy.reader";
import veg from "../../assets/veg.png";

const FoodCard = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = useCallback((item) => {
    //useCallback
    dispatch(
      cartactions.addItemToCart({
        id: item.card.info.id,
        title: item.card.info.name,
        price: item.card.info.price / 100,
      })
    );
  }, []);

  const idsArray = props.passId;

  console.log(props.passId);

  const onAdd = (index) => {
    props.setcounter(props.counter + 1);
    props.additems(true);
  };

  return (
    <div className="food-card">
      {map(idsArray, (items, index) => {
        return (
          <>
            <div className="food">
              <div className="food-info">
                <img src={veg} />

                <h3>{RestReader.foodName(items)}</h3>
                <h4>₹{RestReader.price(items) / 100}</h4>
                <h5>{RestReader.description(items)}</h5>
              </div>

              <div className="food-image">
                <img
                  alt="image not found"
                  src={`${IMAGE_URL}/${RestReader.imageId(items)}`}
                />
                <button
                  id="add-button"
                  onClick={() => {
                    addToCartHandler(items);
                    onAdd(index);
                    props.addToCart(items, RestReader.price(items) / 100);
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
