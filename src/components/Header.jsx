import { Link } from "react-router-dom"
import LightIcon from "../assets/light-mode.svg"
import DarkIcon from "../assets/dark-mode.svg"
const Header = ({darkMode, setDarkMode, currentUrl, cart}) => {
    console.log(cart.length)
  return (
    <header className=' flex justify-center sticky top-0 p-2'>
        <nav>
            <ul className="flex items-center gap-4 bg-black text-slate-100 dark:bg-slate-100 dark:text-black p-4 max-w-96 rounded-full">
            {/* {`${darkMode ? 'dark' : ''}`} */}
                <li  className={`cursor-pointer ${currentUrl === '/' ? 'bg-slate-100 text-black dark:bg-black dark:text-slate-100 rounded-full p-2' : ''}`}>
                    <Link to="/" replace={true}>Home</Link>
                </li>
                <li className={`cursor-pointer ${currentUrl === '/shop' ? 'bg-slate-100 text-black dark:bg-black dark:text-slate-100 rounded-full p-2' : ''}`}>
                    <Link to="/shop" replace={true}>Shop</Link>
                </li>
                <li className={`cursor-pointer ${currentUrl === '/cart' ? 'bg-slate-100 text-black dark:bg-black dark:text-slate-100 rounded-full p-2' : ''}`}>
                    <Link to="/cart" replace={true}>
                        Cart
                    </Link>
                </li>
                <li className=''>
                    <button className='w-10 h-10 bg-slate-100 text-black dark:bg-black dark:text-slate-100 p-2 rounded-full' onClick={setDarkMode}>
                        <img src={darkMode ? LightIcon : DarkIcon} alt="" className="dark:text-slate-100"/>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header