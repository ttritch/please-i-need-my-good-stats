import React, { useState } from "react";
import Tooltip from "./Tooltip";

function ItemBar ({name, firstStat, secondStat, firstVal, secondVal, source, instance, image}) {
    const [isVisible, setIsVisible] = useState(false)

    return <div>
        <img 
            src={image}
            onMouseOver={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        />
        {isVisible && <Tooltip source={source}/>}
        <span> {name} </span>
    </div>
}

export default ItemBar 