import React, { useState } from "react";

function Tooltip({name, source, firstStat, secondStat, firstVal, secondVal, instance}) {
    return (
        <div className="tooltip-container">
            <p>{name}</p>
            <p>+{firstVal} {firstStat}</p>
            <p>+{secondVal} {secondStat}</p>
            <p>Dropped From: {source}, {instance}</p>
        </div>
    )
}

export default Tooltip