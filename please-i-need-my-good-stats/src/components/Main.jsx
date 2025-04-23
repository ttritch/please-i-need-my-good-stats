import React, { useState } from "react";
import ItemBar from "./ItemBar";
import Filter from "./Filter";

function Main({plate, mail, leather, cloth, misc, all}) {
    const [armorTypes, setArmorTypes] = useState([plate, mail, leather, cloth])
    const [showMisc, setShowMisc] = useState(true)
    const [itemTypes, setItemTypes] = useState(["head", "shoulder", "chest", "wrist", "hands", "waist", "legs", "feet"])
    const [miscTypes, setMiscTypes] = useState(["neck", "back", "finger"])
    return <div>
        <h2> please i need my good stats</h2>
        <div>
            <Filter 
                plate={plate}
                mail={mail}
                leather={leather}
                cloth={cloth}
                misc={misc}
                armorFilter={armorTypes}
                setArmorFilter={setArmorTypes}
                setShowMisc={setShowMisc}
            />
            {armorTypes.map((armor) => {
                return itemTypes.map((type) => {
                    return armor[type].map((item) => {
                        return <ItemBar
                            key={item.id}
                            name={item.name}
                            firstStat={item.firstStat}
                            secondStat={item.secondStat}
                            firstVal={item.firstVal}
                            secondVal={item.secondVal}
                            source={item.source}
                            instance={item.instance}
                            image={item.image}
                        />
                    })
                })})}
            { showMisc ? (miscTypes.map((type) => {
                return misc[type].map((item) => {
                    return <ItemBar
                        key={item.id}
                        name={item.name}
                        firstStat={item.firstStat}
                        secondStat={item.secondStat}
                        firstVal={item.firstVal}
                        secondVal={item.secondVal}
                        source={item.source}
                        instance={item.instance}
                        image={item.image}
                    />
                })
            })) : (<></>)}
        </div>
    </div>
}

export default Main