import { useState } from "react"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <div className="noise" />
      <Cursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

export default App