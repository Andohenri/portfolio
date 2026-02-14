import { useState } from "react"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"

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
        <About />
        <Skills />
        <Work />
        <Contact />

        <Footer />
      </main>
    </>
  )
}

export default App