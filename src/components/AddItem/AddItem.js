import React, { useEffect, useState } from "react";
import './AddItem.css';
import { Link, useParams } from "react-router-dom";

const AddItem = (props) =>{

    const restId = useParams().id;
   console.log(props.onPass)
//    const menu = props.onPass.menu.items;

//    const ids = props.onPass.menu.widgets?.map((category)=>category.entities);
//    const cost = ids.map((items)=>{
//          menu[items.id].price
//    })

  
  
    const[check , setCheck] = useState(true);

    return(
        <div className="add-item">
            <Link to={{ pathname:'checkout', state: 'props.onPass'}}>
            <button
             > 
                <div className="items-info">
                <div> {props.counter} Items </div>
                <div>View cart</div>
                </div>
                
            </button></Link>
           
            
        </div>
    )

}
export default AddItem;