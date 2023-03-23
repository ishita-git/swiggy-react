import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`image/${id}`);
  };
  const { id } = props;


  const formatArea = val => <span>{val} {'\u2605'}</span>

  return (
    <div className="card" onClick={handleClick}>
      <img src={props.image} alt="image " />
      <h3>{props.title}</h3>
      <h5>{props.sub}</h5>
      <div className="details">
        <div className="details-rating"> {formatArea()} {props.rating}</div>

        <div>•</div>

        <div>{props.time}</div>

        <div>•</div>

        <div>{props.price}</div>
      </div>
      {/* <h5>{props.rating}  .  {props.time}  .  {props.price}</h5> */}
      <hr />
      <h5>Free Delivery</h5>
    </div>
  );
};

export default Card;
