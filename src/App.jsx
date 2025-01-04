import { Fragment } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./sections/Home"
import Services from "./sections/Services"
import About from "./sections/About"
import Tools from "./sections/Tools"
import Projects from "./sections/Projects"
import Experiences from "./sections/Experiences"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="w-screen h-full bg-primary-bg">
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Tools/>
      <Projects/>
      <Experiences/>
      <Contact/>
    </div>
  )
}

export default App