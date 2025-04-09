import React, { useEffect, useState } from "react";

function LoadingPage () {
    const [isLoading, setLoading] = useState(false)
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
        })
      }, [])

    return <div>
        { isLoading ? (
            <img src="./LoadIcon.gif"/>) : (
            <h3>Loading Successful</h3>
            )}
    </div>
}

export default LoadingPage