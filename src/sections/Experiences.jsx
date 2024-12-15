import { useState } from "react"

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

    <div className="h-screen bg-primary-bg p-10">
        <p className="text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">Work Experiences</p>
        <p className="text-[20px] font-jamjuree text-dark-light mt-[20px]">With 2 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous frontend, backend, and AI applications, managed various projects, and contributed to Opensource projects</p>
        <div className="grid grid-cols-2 gap-10 ">
            {data.map((item, index) => {

              return (
                <div key={index} className="bg-bg-light">
                    <div onClick={() => toggleAccordion(index)} className="flex justify-between items-center p-4 cursor-pointer">
                      <h2 className="bg-slate-400 ">{item.year}</h2>
                      <section>
                        <h3 className="text-xl">{item.role}</h3>
                        <p>{item.company}</p>
                        <p>{item.location}</p>
                      </section>
                      <span className="text-xl">
                          {activeIndex === index ? "-": "+"}
                      </span>
                    </div>
                    {activeIndex === index && (
                      <div className="p-4 bg-white">{item.description}</div>
                    )}
                </div>
              )})}
        </div>
              

    </div>
  )
}

export default Experiences