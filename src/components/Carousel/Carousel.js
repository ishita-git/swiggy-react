import React, { useCallback, useState } from "react";
import { getMaxWidth } from "../../utils/swiggy";

import "./Carousel.css";

const Carousel = () => {
  const [leftScroll, setLeftScroll] = useState(false);
  const [rightScroll, setRightScroll] = useState(true);
  const [activeIndex, setActiveindex] = useState(0);

  const leftButton = useCallback(() => {
    //useCallback
    const maxWidht = getMaxWidth();

    let newActiveIndex = Math.max(
      activeIndex - document.getElementById("item-carousel").clientWidth,
      0
    );

    if (newActiveIndex === 0) {
      setLeftScroll(false);
    }

    if (newActiveIndex < maxWidht) {
      setRightScroll(true);
    }

    setActiveindex(newActiveIndex);
  });

  const rightButton = useCallback(() => {
    let maxWidht = getMaxWidth();

    let newActiveIndex = Math.min(
      activeIndex + document.getElementById("item-carousel").clientWidth,
      maxWidht)
      if (newActiveIndex === maxWidht) {
        setRightScroll(false);
      }
  
      if (newActiveIndex > 0) setLeftScroll(true);
  
      setActiveindex(newActiveIndex);
    });
    

    
  

  return (
    <div className="carousel">
      <div className="indicators" style={{ flexDirection: "row-reverse" }}>
        <a
          id="left-arrow"
          onClick={leftButton}
          class="material-symbols-outlined"
          style={{
            color: "white",
            display: `${leftScroll ? "block" : "none"}`,
          }}
        >
          arrow_circle_left
        </a>
      </div>

      <div className="carousel-items">
        <div
          className="items"
          id="item-carousel"
          style={{
            transform: `translateX(-${activeIndex}px)`,
            transition: "0.5s",
          }}
        >
          <a href="">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" />
          </a>
        </div>

        <div
          className="items"
          style={{
            transform: `translateX(-${activeIndex}px)`,
            transition: "0.5s",
          }}
        >
          <a href="">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" />
          </a>
        </div>

        <div
          className="items"
          style={{
            transform: `translateX(-${activeIndex}px)`,
            transition: "0.5s",
          }}
        >
          <a href="">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt" />
          </a>
        </div>

        <div
          className="items"
          style={{
            transform: `translateX(-${activeIndex}px)`,
            transition: "0.5s",
          }}
        >
          <a href="">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tgnvusbs3fnzz7xupeno" />
          </a>
        </div>

        <div
          className="items"
          style={{
            transform: `translateX(-${activeIndex}px)`,
            transition: "0.5s",
          }}
        >
          <a href="">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nhubtkw7dukg3ukcmpam" />
          </a>
        </div>

        <div
          className="items"
          style={{
            transform: `translateX(-${activeIndex}px)`,
            transition: "0.5s",
          }}
        >
          <a href="">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" />
          </a>
        </div>
      </div>

      <div className="indicators">
        <a
          onClick={rightButton}
          class="material-symbols-outlined"
          style={{
            color: "white",
            display: `${rightScroll ? "block" : "none"}`,
          }}
        >
          arrow_circle_right
        </a>
      </div>
    </div>
  );
};
export default Carousel;
