import React, { useState } from "react";

function Tooltip({text, source}) {
    return (
        <div>
            <span>Dropped From: {source}</span>
        </div>
    )
}

export default Tooltip