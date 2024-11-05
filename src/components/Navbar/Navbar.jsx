import dark from "../../assets/dark.svg"
import ToggleMenu from "./ToggleMenu"

function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 p-6 bg-bg-light">
      <section className="flex justify-between items-center gap-4">
        <ToggleMenu />
        <p className="font-bakbak text-logo bg-gradient-to-r from-lemon to-purple bg-clip-text text-transparent">
          &#123; EmediongEdem &#125;
        </p>
      </section>
      <section className="flex justify-center items-center gap-4">
        <p className="w-11 h-11 bg-toggle font-jamjuree flex justify-center items-center rounded-md text-dark-light ">
          EN
        </p>
        <div className="w-11 h-11 bg-toggle font-jamjuree flex justify-center items-center rounded-md text-dark-light ">
          <img src={dark} />
        </div>
        <p className="w-auto px-2 h-11 bg-toggle font-jamjuree flex justify-center items-center rounded-md text-dark-light">
          RESUME
        </p>
      </section>
    </div>
  );
}

export default Navbar