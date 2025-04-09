import React, { useEffect, useState } from "react";
import Main from "./Main";

function LoadingPage () {
    const [isLoading, setLoading] = useState(true)
    const [plateItems, setPlateItems] = useState([])
    const [mailItems, setMailItems] = useState([])
    const [leatherItems, setLeatherItems] = useState([])
    const [clothItems, setClothItems] = useState([])
    const [miscItems, setMiscItems] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:5000/season-2')
        .then(resp => resp.json())
        .then(data => {
          setPlateItems(data.plate)
          setMailItems(data.mail)
          setLeatherItems(data.leather)
          setClothItems(data.cloth)
          setMiscItems(data.misc)
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
            />
            )}
    </div>
}

export default LoadingPage