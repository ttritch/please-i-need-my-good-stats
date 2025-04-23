import React, { useState } from "react";

function Filter({plate, mail, leather, cloth, misc, armorFilter, setArmorFilter, setShowMisc}) {
    const [filterPlate, setFilterPlate] = useState(false)
    const [filterMail, setFilterMail] = useState(false)
    const [filterLeather, setFilterLeather] = useState(false)
    const [filterCloth, setFilterCloth] = useState(false)
    const [filterMisc, setFilterMisc] = useState(false)

    return <div>
        <button onClick={() => {
            if(filterPlate == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterPlate(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([plate])
                setShowMisc(false)
                setFilterPlate(true)
            }
        }}>Plate</button>
        <button onClick={() => {
            if(filterMail == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterMail(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([mail])
                setShowMisc(false)
                setFilterMail(true)
            }
        }}>Mail</button>
        <button onClick={() => {
            if(filterLeather == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterLeather(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([leather])
                setShowMisc(false)
                setFilterLeather(true)
            }
        }}>Leather</button>
        <button onClick={() => {
            if(filterCloth == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterCloth(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([cloth])
                setShowMisc(false)
                setFilterCloth(true)
            }
        }}>Cloth</button>
        <button onClick={() => {
            if(filterMisc == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterMisc(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([])
                setShowMisc(true)
                setFilterMisc(true)
            }
        }}>Misc</button>
        <p></p>
        <button>Crit</button>
        <button>Mastery</button>
        <button>Haste</button>
        <button>Vers</button>
    </div>
}

export default Filter