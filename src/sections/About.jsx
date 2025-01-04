import profile from "../assets/profile.jpg"

function About() {
  return (
    <div className="about-cont flex  bg-primary-bg h-[140vh] p-10 justify-center items-center">
        <section className="about-sub w-[80%] text-justify">
            <h className="about-head text-[60px] font-bold font-jamjuree bg-gradient-to-r from-lemon via-dark-light to-purple text-transparent bg-clip-text">About Me</h>
            <div className="about-details text-dark-light font-jamjuree">
                <p className="text-[20px] mb-[20px]">I began my development journey in 2017, focusing on design, branding, UX/UI, and WordPress. This led to founding my own design and development agency in 2018</p>
                <p className="text-[20px] mb-[20px]">From 2020, I expanded my skills into programming languages like HTML, CSS, JavaScript, Python, C, C++, and C#. To deepen my understanding, I completed fundamental computer science courses from reputable institutions like Harvard and other online platforms.</p>
                <p className="text-[20px] mb-[20px]">Currently, I&apos;m passionate about GoLang especially the Gin Framework and fascinated by the advancements in artificial intelligence and its potential for positive impact. I have a strong desire and aptitude for continuous learning.</p>
                <p className="text-[20px] mb-[20px]">I&apos;m a quick learner with a proven track record of achieving exceptional frontend performance.</p>
            </div>
            <button type='button' className="flex justify-center items-center rounded-sm text-dark-light w-[150px] h-[50px] bg-gradient-to-r from-purple via-dark-light to-lemon p-[2px] hover:shadow-2xl hover:shadow-indigo-600/30  hover:bg-white group">
                <div className="flex justify-center items-center h-full w-full rounded-sm font-jamjuree text-[18px] font-[500] bg-primary-bg group-hover:text-white">Open Resume</div>
            </button>
        </section>
        <section className="image flex justify-center items-center">
            <img src={profile} alt=""  className="w-[60%] rounded-xl"/>
        </section>
    </div>
  )
}

export default About