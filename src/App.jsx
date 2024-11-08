import { Fragment } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./sections/Home"

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
    </Fragment>
  )
}

export default App