import { Link} from "react-router-dom";
import React from "react";

import "./AddItem.css";

const AddItem = (props) => {
  return (
    <div className="add-item">
      <Link to={{ pathname: "checkout", state: "props.onPass" }}>
        <button>
          <div className="items-info">
            <div> {props.counter} Items </div>
            <div>View cart</div>
          </div>
        </button>
      </Link>
    </div>
  );
};
export default AddItem;
