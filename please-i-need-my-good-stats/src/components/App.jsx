import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

function App () {
  const [test, setTest] = useState("")
  const [isLoading, setLoading] = useState(false)

  return <div className="app">
      <LoadingPage />
  </div>
}

export default App;
