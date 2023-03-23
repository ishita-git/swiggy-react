import React from "react";

const HomeHeader = ()=>{
    return(
       <div>
        <ul style={{ position: "relative" }}>
            <li className="li-home-header">
              <a>Relevance </a>
            </li>
            <li className="li-home-header">
              <a>Delivery Time </a>
            </li>
            <li className="li-home-header">
              <a>Rating </a>
            </li>
            <li className="li-home-header">
              <a>Cost : Low to High</a>
            </li>
            <li className="li-home-header">
              <a>Cost: High to Low</a>
            </li>
            <li>
              <a>
                <div style={{ position: "absolute" }}>Filters</div>{" "}
                <a
                  class="material-symbols-outlined"
                  style={{
                    color: "orange",
                    position: "relative",
                    marginLeft: "50px",
                  }}
                >
                  tune
                </a>
              </a>
            </li>
          </ul>
       </div>

    )
}

export default HomeHeader;