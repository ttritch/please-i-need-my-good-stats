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
        {isVisible && <Tooltip 
            name={name}
            source={source}
            firstStat={firstStat}
            secondStat={secondStat}
            firstVal={firstVal}
            secondVal={secondVal}
            instance={instance}
        />}
        {isVisible || <span>{name}</span>}
    </div>
}

export default ItemBar 