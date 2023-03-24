import { useSelector } from "react-redux";
import map from "lodash/map";
import React, { useCallback, useState } from "react";

import AfterButton from "../../components/Button/AfterButton";
import SignIn from "../SignIn/SignIn";

import "./Checkout.css";

const Checkout = (props) => {
  const [check, setCheck] = useState(false);
  const [rightPixel, setRightPixel] = useState(-600);
  const checkLoggedIn = localStorage.getItem("isloggedIn");

  const cartItem = useSelector((state) => state.cart.items);
  const totalprice = useSelector((state) => state.cart.amount);

  const handleClick = useCallback(() => {
    setCheck(true);
    setRightPixel(0);
  }, [check, rightPixel]);

  const closeHandle = useCallback(() => {
    setCheck(false);
    setRightPixel(-600);
  },[check,rightPixel]);

  const paymentHandler = useCallback(() => {
    if (checkLoggedIn) {
      alert(`Payment done, ${localStorage.getItem("isloggedIn")} !`);
      localStorage.clear();
      window.open("/", "_self");
    } else {
      alert("Login First!");
    }
  }, [checkLoggedIn]);

  return (
    <div className="checkout-page">
      <div className="checkout-info">
        <div className="checkout-details-card">
          <div className="title">
            <h3>Title</h3>
            <h5>Area</h5>
          </div>
          <div className="checkout-items">
            <div className="items-div">
              {map(cartItem, (item) => {
                return (
                  <div className="item-indi">
                    <div style={{ marginRight: "40px" }}>{item.name}</div>
                    <div style={{ marginRight: "40px" }} className="adding">
                      <AfterButton
                        totalPrice={item.totalPrice}
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    </div>
                    <div>₹{item.totalPrice}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="total">
            <div>TO PAY</div>
            <div>TOTAL: ₹{totalprice}</div>
          </div>
        </div>
      </div>

      <div className="checkout-payment">
        <div className="checkout-payment-card">
          <h3>Account</h3>
          <h5>
            To place your order now, log in to your existing account or sign up.
          </h5>

          <div className="login-signin-buttons">
            <button onClick={() => paymentHandler()}>Proceed to Payment</button>
            <button onClick={handleClick}>Sign In</button>
          </div>
        </div>
      </div>

      {check && <SignIn onClose={closeHandle} onStyle={rightPixel} />}
      {check && <div className="overlay"></div>}
    </div>
  );
};

export default Checkout;
