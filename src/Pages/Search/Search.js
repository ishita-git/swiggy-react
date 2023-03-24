import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Header from "../../components/Header/Header";
import "./Search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const searchFood = [
    { name: "Pizza", restaurant: "Dominose" },
    { name: "Pizza", restaurant: "Pizzahut" },
    { name: "Idli" , restaurant: " Sagar"}
  ];

  const handleChange = (e) => { //callback
    e.preventDefault();
    setSearchInput(e.target.value);

    // console.log(searchInput);

    if (searchInput.length > 0) {
      searchFood.filter((food) => {
        return food.name.includes(searchInput);
      });
    }
  };

  return (
    <>
      <Header />
      <div className="search-bar">
        <TextField
          id="outlined-basic"
          variant="outlined"
          style={{ width: "70%", marginLeft: "15%" }}
          label="Search for restaurants and food"
          value={searchInput}
          onChange={handleChange}
        />
      </div>

      <div className="search-content">
        <div>
          <h4 style={{ padding: "18px 0 0 0px" }}> Popular Cuisines</h4>
        </div>

        <div className="images-grid">
          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1" />
          </a>

          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv" />
          </a>

          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/oea45ipb1ctr4m61m7af" />
          </a>

          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc" />
          </a>
        </div>

        
       
      </div>
    </>
  );
};
export default Search;
