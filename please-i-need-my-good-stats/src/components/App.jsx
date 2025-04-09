import React, { useEffect, useState } from "react";

function App () {
  const [test, setTest] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/season-2')
    .then(resp => resp.json())
    .then(data => {
      setLoading(true)
      console.log(data.plate.chest[0])
      setTest(data.plate.chest[1].image)
      console.log(test)
    })
  }, [isLoading])

  return <div>
      <img src={test} />
  </div>
}

export default App;
