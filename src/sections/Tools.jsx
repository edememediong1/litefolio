import javascript from "../assets/javascript.svg"
import python from "../assets/python.svg"
import nodejs from "../assets/nodejs.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import nextjs from "../assets/nextjs.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"

function Tools() {
  return (
    <div className="tools-cont h-screen  bg-primary-bg p-10">
        <h2 className="tools-head text-[3.5rem] font-[700] font-jamjuree bg-gradient-to-r from-lemon via-dark-light to-purple bg-clip-text text-transparent">Tools I have used</h2>
        <p className="tools-text text-[1.25rem] font-jamjuree text-dark-light mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias possimus odio odit tempora assumenda quibusdam laboriosam sint sunt obcaecati doloribus, quo neque nulla quam quos fuga doloremque enim facere.</p>
        <article className="tools-item flex justify-between items-center h-[70%]">
            <section className="tool-one w-[50%] flex justify-start items-center">
                <p className="text-[2rem] font-jamjuree font-bold -rotate-90 text-white">Languages</p>
                <div className="flex justify-center items-center gap-6">
                    <img src={javascript} alt="" />
                    <img src={python} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                </div>
            </section>
            <section className="tool-two w-[50%] flex justify-start items-start mt-0 p-0">
                <p className="text-[2rem] font-jamjuree font-bold -rotate-90 text-white">Frameworks</p>
                <div className="justify-center items-center gap-6 grid grid-cols-4">
                    <img src={nextjs} alt="" />
                    <img src={nodejs} alt="" />
                    <img src={tailwind} alt="" />
                    <img src={react} alt="" />
                </div>
            </section>
        </article>
    </div>
  )
}

export default Tools