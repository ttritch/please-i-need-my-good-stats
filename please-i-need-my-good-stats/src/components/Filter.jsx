import React, { useState } from "react";
import "../styling/Filter.css"

function Filter({plate, mail, leather, cloth, misc, armorFilter, setArmorFilter, setShowMisc}) {
    const [filterPlate, setFilterPlate] = useState(false)
    const [filterMail, setFilterMail] = useState(false)
    const [filterLeather, setFilterLeather] = useState(false)
    const [filterCloth, setFilterCloth] = useState(false)
    const [filterMisc, setFilterMisc] = useState(false)

    return <div>
        <button className={ filterPlate ? 'selected-filter' : 'unselected-filter'} onClick={() => {
            if(filterPlate == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterPlate(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([plate])
                setShowMisc(false)
                setFilterMisc(false)
                setFilterPlate(true)
                setFilterMail(false)
                setFilterLeather(false)
                setFilterCloth(false)
            }
        }}>Plate</button>
        <button className={ filterMail ? 'selected-filter' : 'unselected-filter'} onClick={() => {
            if(filterMail == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterMail(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([mail])
                setShowMisc(false)
                setFilterMisc(false)
                setFilterPlate(false)
                setFilterMail(true)
                setFilterLeather(false)
                setFilterCloth(false)
            }
        }}>Mail</button>
        <button className={ filterLeather ? 'selected-filter' : 'unselected-filter'} onClick={() => {
            if(filterLeather == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterLeather(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([leather])
                setShowMisc(false)
                setFilterMisc(false)
                setFilterPlate(false)
                setFilterMail(false)
                setFilterLeather(true)
                setFilterCloth(false)
            }
        }}>Leather</button>
        <button className={ filterCloth ? 'selected-filter' : 'unselected-filter'} onClick={() => {
            if(filterCloth == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterCloth(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([cloth])
                setShowMisc(false)
                setFilterMisc(false)
                setFilterPlate(false)
                setFilterMail(false)
                setFilterLeather(false)
                setFilterCloth(true)
            }
        }}>Cloth</button>
        <button className={ filterMisc ? 'selected-filter' : 'unselected-filter'} onClick={() => {
            if(filterMisc == true) {
                setArmorFilter([plate, mail, leather, cloth])
                setFilterMisc(false)
                setShowMisc(true)
            }
            else {
                setArmorFilter([])
                setShowMisc(true)
                setFilterMisc(true)
                setFilterPlate(false)
                setFilterMail(false)
                setFilterLeather(false)
                setFilterCloth(false)
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