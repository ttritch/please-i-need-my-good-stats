import React from "react";

function Filter({all}) {
    console.log(all)
    return <div>
        <button>Plate</button>
        <button>Mail</button>
        <button>Leather</button>
        <button>Cloth</button>
        <button>Misc</button>
        <p></p>
        <button>Crit</button>
        <button>Mastery</button>
        <button>Haste</button>
        <button>Vers</button>
    </div>
}

export default Filter