import brain from "../../src/assets/bx-brain.svg"
import pen from "../../src/assets/bx-pencil.svg"
import wrench from "../../src/assets/bx-wrench.svg"
import brush from "../../src/assets/bxs-brush.svg"
import device from "../assets/bxs-devices.svg"
import leaf from "../assets/bx-leaf.svg"

function Services() {
  return (
    <div className="bg-primary-bg p-8 pt-[100px]">
        <p className="text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent ">Services I provide</p>
        <p className="text-[20px] font-jamjuree text-dark-light mt-[20px]">With 2 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous frontend, backend, and AI applications, managed various projects, and contributed to Opensource projects</p>
        <article className="article gap-4 mt-10">
            <section className="card-wrapper  ">
                <div className="card-content">
                    <img src={brush} alt="" />
                    <p className="content-header">Frontend Development</p>
                    <p className="content-text">Can help in building scalable, user-driven and seamless user interfaces for your web application, using the right frameworks </p>
                </div>
            </section>
            <section className="card-wrapper">
                <div className="card-content">
                    <img src={wrench} alt="" />
                    <p className="content-header">Backend Development</p>
                    <p className="content-text">Can help in building scalable, user-driven and seamless user interfaces for your web application, using the right frameworks </p>
                </div>
            </section>
            <section className="card-wrapper">
                <div className="card-content">
                    <img src={device} alt="" />
                    <p className="content-header"> Fullstack Development</p>
                    <p className="content-text">Can help in building scalable, user-driven and seamless user interfaces for your web application, using the right frameworks </p>
                </div>
            </section>
            <section className="card-wrapper">
                <div className="card-content">
                    <img src={brain} alt="" />
                    <p className="content-header">ML Engineering</p>
                    <p className="content-text">Can help in building scalable, user-driven and seamless user interfaces for your web application, using the right frameworks </p>
                </div>
            </section>
            <section className="card-wrapper">
                <div className="card-content">
                    <img src={pen} alt="" />
                    <p className="content-header">Technical Writing</p>
                    <p className="content-text">Can help in building scalable, user-driven and seamless user interfaces for your web application, using the right frameworks </p>
                </div>
            </section>
            <section className="card-wrapper">
                <div className="card-content">
                    <img src={leaf} alt="" />
                    <p className="content-header">Training and Mentorship</p>
                    <p className="content-text">Can help in building scalable, user-driven and seamless user interfaces for your web application, using the right frameworks </p>
                </div>
            </section>
           
        </article>
    </div>
  )
}

export default Services