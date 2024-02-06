import { Link } from "react-router-dom";
import undrawShoppingSvg from "../assets/shopping-undraw-io.svg"

const HeroSection = () => {
  return (
    <section style={{minHeight : 'calc(100vh - 88px)'}} className="bg-white dark:bg-neutral-800 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-teal-500 text-3xl lg:text-4xl text-center">Elevate Your Shopping Experience</h2>
        <p className="text-black dark:text-slate-100 text-xl text-center">Enter a Realm of Unmatched Quality and Timeless Elegance</p>
        <Link to='/shop' className="bg-teal-500 w-max self-center p-2 rounded-md hover:opacity-80 active:opacity-100">Shop Now</Link>
      </div>
      <div>
        <img src={undrawShoppingSvg} className="" alt="" />
      </div>
     
    </section>
  )
}

export default HeroSection;