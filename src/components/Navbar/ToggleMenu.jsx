import menuOpen from "../../assets/open-vector.svg"
import menuClose from "../../assets/close-vector.svg"
import {useState} from 'react'

function ToggleMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
    <div className="">
        {/* Menu Icon */}
        <button onClick={toggleMenu} className="w-11 bg-toggle h-11 flex justify-center items-center rounded-md ">
            <img src={isOpen ? menuClose: menuOpen} alt="" />
        </button>

        {isOpen && (
            <div className="absolute mt-8 w-64 bg-bg-light">
                <ul>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Services</li>
                </ul>
            </div>
    </div> 
  )
}

export default ToggleMenu