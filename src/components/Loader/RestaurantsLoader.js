import { Skeleton } from "react-content-placeholder";
import React from "react";

import Card from "../../components/Card/Card";

const RestaurantsLoader = () =>{
    return(
        <Skeleton loading>
            <Card />
            <Card/>
            <Card/>
            <Card/>
        </Skeleton>

    )

}

export default RestaurantsLoader;