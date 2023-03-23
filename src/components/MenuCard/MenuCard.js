import React, { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import "./MenuCard.css";



const MenuCard = (props) => {
  const menuHeadings = props.onPass.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(menuHeadings?.length)

  // console.log(props.onPass)
  const [menuArray, setMenuArray] = useState(
    new Array(menuHeadings?.length).fill(false)
  );

  const cardHandler = (name, index) => {
    if (menuArray[index]) {
      setMenuArray(new Array(menuHeadings?.length).fill(false));
      return;
    }

    let arr = new Array(menuHeadings?.length).fill(false);
    arr[index] = true;
    setMenuArray(arr);
  };

  return (
    
    <div className="menu-card">
      {props.onPass.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((category, index) => {
        return (
          <div className="menu">
             <button onClick={() => cardHandler(category.name, index)}>
           
        
              <h3>
                {category.card.card.title} 
              </h3>
            </button>

            {menuArray[index] && (
              <FoodCard
                additems={props.additem}
                counter={props.counter}
                setcounter={props.setcounter}
                passId={category.card.card.itemCards}
                passMenu={props.onPass}
                addToCart={props.addToCart}
                addMenu={props.addMenu}
                key={index}
              />
            )}
          
          </div>
        );
      })} 
    </div>
    
   
  );
};


export default MenuCard;