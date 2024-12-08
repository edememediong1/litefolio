import { useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, EffectFade} from 'swiper/modules'
import profile from "../assets/profile.jpg"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'


const cards = [
  {id: 1, title: "Cardinal Store", description: "A simple ecommerce Site", "src": profile},
  {id: 2, title: "Intellectual", description: "AI Resume formater using GPT", "src": profile},
  {id: 3, title: "Tonify", description: "AI cream recommendation App", "src": profile},
  {id: 4, title: "Horizon AI", description: "Horizon is a movie recommender system using AI", "src": profile},
  {id: 5, title: "Gym Shepherd", description: "Build your fitness goals with a shepherd", "src": profile},
  {id: 6, title: "Mentor", description: "Project management tool for developers and founders who want to scale", "src": profile}
]

function Projects() {

  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  return(
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false 
        }}
        effect="fade"
        className="w-full h-[500px]"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="relative">
              <div 
                className="relative w-full h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={profile} className="w-[200px] h-[200px]" />
              </div>
            </SwiperSlide>
          ))

          }

        </Swiper>
    </div>
  )
}

export default Projects