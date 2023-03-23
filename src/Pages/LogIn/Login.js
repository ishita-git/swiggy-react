import React from "react";
import "./Login.css";

const Login = (props) => {
  return (
    <div className="loginBar">
      <div className="login-container">
        <h5 className="login-label">Log In</h5>

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
            left: "1%",
            top: "10%",
          }}
        />

        <div className="login-info"
          style={{
            position: "relative",
            top: "25%",
            left: "5%",
            marginBottom: "50px",
          }}
        >
          <span> or </span>
          <a href="" style={{ color: "orange" }}>
            create your account
          </a>
        </div>

        <br />

        <div className="login-inputs">
          <form className="login-form">
            <br />
            <input
              placeholder="Phone number"
              type="tel"
              maxLength="10"
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
            <br />

            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
