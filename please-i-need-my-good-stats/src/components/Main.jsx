import React from "react";
import ItemBar from "./ItemBar";
import Filter from "./Filter";

function Main({plate, mail, leather, cloth, misc, all}) {
    const itemTypes = ["head", "shoulder", "chest", "wrist", "hands", "waist", "legs", "feet"]
    return <div>
        <h2> please i need my good stats</h2>
        <div>
            <Filter all={all}/>
            {itemTypes.map((type) => {
                return plate[type].map((item) => {
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
            })}
        </div>
    </div>
}

export default Main