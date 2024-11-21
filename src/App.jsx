import { Fragment } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./sections/Home"
import Services from "./sections/Services"

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Services/>
    </Fragment>
  )
}

export default App