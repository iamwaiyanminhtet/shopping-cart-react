const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className=' flex justify-center sticky top-0 p-2'>
        <nav>
            <ul className="flex items-center gap-4 bg-black text-slate-100 dark:bg-slate-100 dark:text-black p-4 max-w-96 rounded-full">
                <li className='bg-slate-100 text-black dark:bg-black dark:text-slate-100 rounded-full p-2'>Home</li>
                <li>Shop</li>
                <li>Cart</li>
                <li className=''>
                    <button className='w-10 h-10 bg-slate-100 text-black dark:bg-black dark:text-slate-100 p-2 rounded-full' onClick={setDarkMode}>
                        {darkMode ? 'L' : 'D'}
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header