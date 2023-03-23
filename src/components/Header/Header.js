import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/swiggy.png";
import { Link } from "react-router-dom";
import SignIn from "../../Pages/SignIn/SignIn";
import Search from "../../Pages/Search/Search";


// import arrow from '../assets/down-arrow.png';

const Header = (props) => {

  const [beforeLogin , setBeforeLogin] = useState(false)
  const[name, setName] = useState('')

  const [check, setCheck] = useState(false);
  const [rightPixel, setRightPixel] = useState(-600);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setCheck(true);
    setRightPixel(0);
  };
  const closeHandle = (name) => {
    console.log(name)
    setCheck(false);
    setRightPixel(-600);
    setName(name)
    setBeforeLogin(true)
  };
  const searchHandle = () => {
    setClick(true);
  };

 

  useEffect(()=>{
    const loggedUser = localStorage.getItem("isloggedIn");
  }, [beforeLogin])

  return (
    <div className="header-container"><header className="main-header">
    <img className="logo" src={logo} alt="swiggy logo" />
    <div className="location-input">
      <input placeholder="Location" />
    </div>

    <ul>
      <li>
        <Link to="search">Search</Link>
      </li>
      <li>
        <a>
          <div style={{ display: "flex" }}>
            {" "}
            Offers <sup style={{ color: "orange" }}>NEW</sup>
          </div>
        </a>{" "}
      </li>
      <li>
        <a>Help</a>
      </li>
      {!beforeLogin && <li>
        <a onClick={handleClick}>Sign In</a>
      </li>}
      {beforeLogin && <li>{localStorage.getItem("isloggedIn")}</li>}
      <li>
        <div style={{ display: "flex" }}>
         
          <a style={{ marginLeft: "4px" }}>
       
         {props.counter} Cart</a>
        </div>
      </li>
    </ul>
    {click && <Search />}
    {check && <SignIn onClose={closeHandle} onStyle={rightPixel} />}
    {check && <div className="overlay"></div>}
  </header></div>
    
  );
};

export default Header;
