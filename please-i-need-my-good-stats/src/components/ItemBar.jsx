import React from "react";

function ItemBar ({name, firstStat, secondStat, firstVal, secondVal, source, instance, image}) {
    return <div>
        <img src={image}/>
        <span> {name} </span>
        <span> Dropped From: {source} </span>
    </div>
}

export default ItemBar 