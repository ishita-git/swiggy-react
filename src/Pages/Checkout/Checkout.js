import React, { useState } from "react";
import "./Checkout.css";
import logo from "../../assets/swiggy.png";
import AfterButton from "../../components/Button/AfterButton";
import { useSelector } from "react-redux";
import SignIn from "../SignIn/SignIn";
import Main from "../Main/Main";


const Checkout = (props) => {
  const [check, setCheck] = useState(false);
  const [rightPixel, setRightPixel] = useState(-600);

 

  const handleClick = () => {
    setCheck(true);
    setRightPixel(0);
  };
  const closeHandle = () => {
    setCheck(false);
    setRightPixel(-600);
  };

  const checkLoggedIn = localStorage.getItem("isloggedIn");
  console.log(checkLoggedIn)

  const paymentHandler = () => {
    if (checkLoggedIn) {
      alert(`Payment done, ${localStorage.getItem("isloggedIn")} !`);
      localStorage.clear();
     window.open("/", "_self")
     
    } else {
      alert("Login First!")
    }
  };

  const cartQuantity = useSelector((state) => state.cart.quantity);
  const cartItem = useSelector((state) => state.cart.items);
  const totalprice = useSelector((state) => state.cart.amount);
  const user = useSelector((state)=> state.auth.user)
 

  console.log(cartItem);

  const logoutHandler = () =>{
    localStorage.clear();
  }
 
  return (
    <div className="checkout-page">
      {/* <div className="header">
        <div className="header-info">
          <div className="header-heading">
            <img style={{ width: "80px", height: "80px" }} src={logo} />
          <h3>SECURE CHECKOUT</h3>
          </div>
          
          <div className="user-info">
          <h4 > {localStorage.getItem("isloggedIn")}</h4>
          <button onClick={logoutHandler} >Logout</button>
          </div>
         
        </div>
      </div> */}

      <div className="checkout-info">
        <div className="checkout-details-card">
          <div className="title">
            <h3>Title</h3>
            <h5>Area</h5>
          </div>
          <div className="checkout-items">
            <div className="items-div">
              {cartItem.map((item) => {
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
