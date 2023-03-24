import map from "lodash/map";
import React, { useCallback, useState } from "react";

import FoodCard from "../FoodCard/FoodCard";

import "./MenuCard.css";
import RestReader from "../../readers/swiggy.reader";

const MenuCard = (props) => {
  const menuHeadings =
    RestReader.menuHeadings(props);

  const [menuArray, setMenuArray] = useState(
    new Array(menuHeadings?.length).fill(false)
  );

  const cardHandler = useCallback((name, index) => {
    if (menuArray[index]) {
      setMenuArray(new Array(menuHeadings?.length).fill(false));
      return;
    }

    let arr = new Array(menuHeadings?.length).fill(false);
    arr[index] = true;
    setMenuArray(arr);
  }, [menuArray]);

  return (
    <div className="menu-card">
      {map(menuHeadings, (category, index) => {
        return (
          <div className="menu">
            <button onClick={() => cardHandler(category.name, index)}>
              <h3>{category.card.card.title}</h3>
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
