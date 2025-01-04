import profile from "../assets/profile.jpg"

function Home() {
  return (
    <article className="home-article flex justify-between items-start p-6 bg-primary-bg h-screen pt-vl">
        <section className=" section-one w-[60%] flex flex-col gap-12">
            <section className="first-section">
                <p className="font-bold font-jamjuree  text-dark-light text-[45px]">Frontend Engineer +</p>
                <h3 className=" font-jamjuree bg-gradient-to-r bg-clip-text from-lemon to-purple text-transparent leading-tight text-[50px] font-[700]">Full-stack Developer</h3>
            </section>
            <p className="home-desc font-jamjuree text-justify text-dark-light text-[22px]">
                Frontend Engineer using HTML, CSS, Javascript, TypeScript, React and Nextjs. Backend using Node, Express, SQL, Postgres and Prisma. Building robust web, mobile and desktop applications.
            </p>
            <button type='button' className="flex justify-center items-center rounded-sm text-dark-light w-[150px] h-[50px] bg-gradient-to-r from-purple via-dark-light to-lemon p-[2px] hover:shadow-2xl hover:shadow-indigo-600/30  hover:bg-white group">
                <div className="flex justify-center items-center h-full w-full rounded-sm font-jamjuree text-[18px] font-[500] bg-primary-bg group-hover:text-white">Open Resume</div>
            </button>
        </section>
        <section className="home-img-cont h-[80%] w-[340px] rounded-sm bg-gradient-to-r from-lemon to-purple p-[4px]">
            <div className=" h-full w-full bg-primary-bg m-auto relative rounded-sm">
                <img src={profile} alt="profile picture" className="h-full w-full rounded-md absolute right-5 bottom-5"/>
            </div>
        </section>
    </article>
  )
}

export default Home