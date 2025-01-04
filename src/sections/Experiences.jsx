import { useState } from "react"
import down from "../../src/assets/down.svg"
import up from "../../src/assets/up.svg" 

function Experiences() {
    const [activeIndex, setActiveIndex] = useState(null)
   
    const data = [
      {
        "year": 2022,
        "role": "Frontend Intern",
        "company": "at Mediprox",
        "location": "May to December /Remote",
        "description": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act1": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act2": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act3": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites"
      },
      {
        "year": 2022,
        "role": "Frontend Intern",
        "company": "at Mediprox",
        "location": "May to December /Remote",
        "description": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act1": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act2": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act3": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites"
      },
      {
        "year": 2022,
        "role": "Frontend Intern",
        "company": "at Mediprox",
        "location": "May to December /Remote",
        "description": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act1": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act2": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites",
        "act3": "American Ecommerce company. They had multiple Brands, Such as Flexible Magnets, Better Crafts, Bubble Blastte. I've Designed and Developed 3 of their websites"
      }

    ]

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null: index)
    }
  return (

    <div className="accord-cont h-auto bg-primary-bg p-10">
        <p className="work-text text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">Work Experiences</p>
        <p className="text-[20px] font-jamjuree text-dark-light mt-[20px] mb-[25px] text-justify ">With 2 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous frontend, backend, and AI applications, managed various projects, and contributed to Opensource projects</p>
        <div className="main-accord grid grid-cols-2 gap-10">
            {data.map((item, index) => {

              return (
                <div key={index} className={` bg-bg-light transition-all duration-300 ease-in-out ${activeIndex === index ? 'h-auto': 'h-[133px] overflow-hidden'}`}>
                    <div  onClick={() => toggleAccordion(index)} className="grid grid-cols-5 cursor-pointer h-[133px] ">
                      <h2 className="col-span-1 flex justify-center items-center font-jamjuree text-[30px] h-[133px] font-bold text-[#c2bad2] bg-[#252f45]">{item.year}</h2>
                      <section className="col-span-3 flex-col justify-center items-start bg-[#1b2335] p-4">
                        <h3 className="text-xl text-[22px] font-bakbak bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">{item.role}</h3>
                        <p className="text-[18px] text-[#c2bad2] font-jamjuree">{item.company}</p>
                        <p className="text-[18px] text-[#c2bad2] font-jamjuree">{item.location}</p>
                      </section>
                      <span className="col-span-1  flex justify-center items-center text-xl">
                          {activeIndex === index ? <img src={up} alt="" /> : <img src={down} alt="" />}
                      </span>
                    </div>
                    {activeIndex === index ? (
                      <div className="left-0 right-0 z-10 p-4 bg-bg-light h-[300px] ">
                        <p className="text-[18px] text-[#c2bad2] font-jamjuree mb-[10px]">{item.description}</p>
                        <p className="text-[18px] text-[#c2bad2] font-jamjuree mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptas, autem numquam, reprehenderit voluptatem hic corrupti dolore iste cumque architecto libero provident, ipsam pariatur</p>
                        <p className="text-[18px] text-[#c2bad2] font-jamjuree mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptas, autem numquam, reprehenderit voluptatem hic corrupti dolore iste cumque architecto libero provident, ipsam pariatur</p>
                      </div> 
                    ) : null}
                </div>
              )})}
        </div>
              

    </div>
  )
}

export default Experiences