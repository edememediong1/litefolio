import { useState } from "react"
import Slider from "react-slick"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Projects() {
  const cards = [
    {id: 1, title: "Cardinal Store", description: "A simple ecommerce Site", "src": one},
    {id: 2, title: "Intellectual", description: "AI Resume formater using GPT", "src": two},
    {id: 3, title: "Tonify", description: "AI cream recommendation App", "src": three},
    {id: 4, title: "Horizon AI", description: "Horizon is a movie recommender system using AI", "src": four},
    {id: 5, title: "Gym Shepherd", description: "Build your fitness goals with a shepherd", "src": five},
    {id: 6, title: "Mentor", description: "Project management tool for developers and founders who want to scale", "src": three}
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const settings = {
  
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  return(
    <article className="bg-primary-bg p-10">
      <p className="text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">Projects I've Built</p>
      <div className="slider-container h-screen  flex flex-col justify-center mt-[-50px]">
        <Slider {...settings} className="">
    
              {cards.map((card, index) =>{
                return(
                  <div key={index} className="relative " onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                    <div className=" w-[285px] h-[200px] ">
                      <img src={card.src} className="h-full  w-full" />
                      {hoveredIndex === index && (
                    
                      <p className="absolute inset-0 bg-primary-bg bg-opacity-80 flex items-center justify-center p-2 text-white text-center text-sm max-w-[285px] font-jamjuree">
                        {card.description}
                      </p>
                           )}
                      <h3 className="bg-bg-light font-bakbak text-white w-full p-[30px] flex justify-center items-center">{card.title}</h3>
                    </div>
                  </div>
              )})}

        </Slider>
      </div>
    </article>
  )

}
export default Projects