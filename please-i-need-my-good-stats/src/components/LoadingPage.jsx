import React, { useEffect, useState } from "react";
import Main from "./Main";

function LoadingPage () {
    const [isLoading, setLoading] = useState(true)
    const [plateItems, setPlateItems] = useState([])
    const [mailItems, setMailItems] = useState([])
    const [leatherItems, setLeatherItems] = useState([])
    const [clothItems, setClothItems] = useState([])
    const [miscItems, setMiscItems] = useState([])
    const [allItems, setAllItems] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:5000/season-2')
        .then(resp => resp.json())
        .then(data => {
          setPlateItems(data.plate)
          setMailItems(data.mail)
          setLeatherItems(data.leather)
          setClothItems(data.cloth)
          setMiscItems(data.misc)
          setAllItems(data)
          setLoading(false)
        })
      }, [])

    return <div>
        { isLoading ? (
            <h2>Loading...</h2>) : (
            <Main 
                plate={plateItems} 
                mail={mailItems} 
                leather={leatherItems} 
                cloth={clothItems} 
                misc={miscItems}
                all={allItems}
            />
            )}
    </div>
}

export default LoadingPage