import menuOpen from "../../assets/open-vector.svg"
import menuClose from "../../assets/close-vector.svg"
import {useState, useRef} from 'react'

function ToggleMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null)

    const homeRef = useRef(null);
    const servicesRef = useRef(null)
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const solvesRef = useRef(null)
    const certificateRef = useRef(null)
    const experienceRef = useRef(null)
    const getRef = useRef(null)

  
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuClick = (menuName, ref) => {
        setActiveMenu(menuName);
        ref.current.scrollIntoView({behavior : 'smooth'})
    }

    return (
    <div className="">
        {/* Menu Icon */}
        <button onClick={toggleMenu} className="w-11 bg-toggle h-11 flex justify-center items-center rounded-md ">
            <img src={isOpen ? menuClose: menuOpen} alt="" />
        </button>

        {isOpen && (
            <div className="absolute mt-8 w-64 bg-bg-light p-7 rounded-md">
                <ul className="flex flex-col gap-4">
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick("home", homeRef)}><div className={`w-7 h-1 ${activeMenu === "home" ? "w-11 bg-gradient-to-r from-lemon to-purple": "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === 'home'? "text-white": 'text-dark-light hover:text-slate-500' }`}>Home</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick('services', servicesRef)}><div className={`w-7 h-1 ${activeMenu === "services" ? "w-10 bg-gradient-to-r from-lemon to-purple": "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === 'services'? "text-white": 'text-dark-light hover:text-slate-500'}`}>Service</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick("skills", skillsRef)}><div className={`w-7 h-1 ${activeMenu === "skills" ? "w-10 bg-gradient-to-r from-lemon to-purple" : "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === 'skills' ? "text-white" : 'text-dark-light hover:text-slate-500'}`}>Skills</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick("projects", projectsRef)}><div className={`w-7 h-1 ${activeMenu === "projects" ? "w-10 bg-gradient-to-r from-lemon to-purple" : "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === "projects" ? "text-white" : "text-dark-light hover:text-slate-500"}`}>Projects</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick("solves", solvesRef)}><div className={`w-7 h-1 ${activeMenu == "solves" ? "w-10 bg-gradient-to-r from-lemon to-purple" : "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu == "solves" ? "text-white" : "text-dark-light hover:text-slate-500"}`}>Solves</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick("certificate", certificateRef)}><div className={`w-7 h-1 ${activeMenu === "certificate" ? "w-10 bg-gradient-to-r from-lemon to-purple": "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === "certificate" ? "text-white": "text-dark-light hover:text-slate-500"}`}>Certificate</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick("experience", experienceRef)}><div className={`w-7 h-1 ${activeMenu === "experience" ? "w-10 bg-gradient-to-r from-lemon to-purple": "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === 'experience' ? "text-white": "text-dark-light hover:text-slate-500"}`}>Experience</p></section>
                    <section className="flex justify-start items-center gap-4" onClick={()=>handleMenuClick('get', getRef)}><div className={`w-7 h-1 ${activeMenu === 'get' ? "w-10 bg-gradient-to-r from-lemon to-purple" : "bg-dark-light"}`}></div><p className={`uppercase font-jamjuree ${activeMenu === 'get' ? "text-white": "text-dark-light hover:text-slate-500"}`}>Get in Touch</p></section>
                </ul>
            </div>
        )}
    </div> 
  )
}

export default ToggleMenu