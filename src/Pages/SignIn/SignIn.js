import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { authActions } from "../../store/auth-slice";
import Login from "../LogIn/Login";

import "./SignIn.css";

const SignIn = (props) => {

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");

  const [isLoggedIn, setIsLoggedin] = useState(false);

  const loginUserHandler = (data) => {
    const user = data.name;
    console.log(data.name);
    localStorage.setItem("isloggedIn", data.name);
  
    setIsLoggedin(true);
    setName(user);
    props.onClose(user);

    dispatch(authActions.login({
      user: name
    }))
   
  };


  const [login, setLogin] = useState(false);

  const closeLogin = () => {
    setLogin(false);
  };

  const loginHandler = () => {
    setLogin(true);
  };

  return (
    <>
      <div className="signinBar " style={{ right: props.onStyle }}>
        <div className="signin-container">
          <h5 className="label">Sign In</h5>
        </div>

        <a onClick={props.onClose}>
          <div class="material-symbols-outlined">close</div>
        </a>

        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          style={{
            width: "100px",
            height: "100px",
            float: "right",
            position: "relative",
            left: "50%",
            top: "10%",
          }}
        />

        <div
          className="signin-info"
          style={{ position: "relative", top: "0", left: "5%" }}
        >
          <span> or </span>
          <a onClick={loginHandler} style={{ color: "orange" }}>
            login to your account
          </a>
        </div>
        <br />
        {login && <Login onClose={closeLogin} />}

        <div className="signin-inputs">
          <form onSubmit={handleSubmit(loginUserHandler)}>
            <input
              type="tel"
              placeholder="Phone number"
              maxLength="10"
              pattern="[1-9]{1}[0-9]{9}"
              {...register("phoneno")}
              required
            />
            <br />
            <input placeholder="Name" {...register("name")} required />
            <br />
            <input
              placeholder="E-mail"
              type="email"
              pattern=".+@gmail\.com"
              {...register("email")}
              required
            />
            <br />
            <br />
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
