import { Fragment } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./sections/Home"
import Services from "./sections/Services"
import About from "./sections/About"
import Tools from "./sections/Tools"
import Projects from "./sections/Projects"

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Tools/>
      <Projects/>
    </Fragment>
  )
}

export default App