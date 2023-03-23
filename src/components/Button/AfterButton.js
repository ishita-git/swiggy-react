import React from "react";
import "./AfterButton.css";
import { useSelector, useDispatch } from "react-redux";
import { cartactions } from "../../store/cart-slice";

const AfterButton = (props) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(
      cartactions.removeItemFromCart({ id: props.id, price: props.price })
    );
  };

  const addToCartHandler = () => {
    dispatch(
      cartactions.addItemToCart({
        quantity: props.quantity,
        price: props.price,
        id: props.id,
        title: props.name,
        totalprice: props.totalprice,
      })
    );
  };

  return (
    <div className="after-button">
      <button onClick={addToCartHandler}>+</button>
      <div> {props.quantity}</div>
      <button onClick={removeFromCartHandler}>-</button>
    </div>
  );
};

export default AfterButton;
