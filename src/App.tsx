import { useState } from "react"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"

const App = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <div className="noise" />
      <Cursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
    </>
  )
}

export default App