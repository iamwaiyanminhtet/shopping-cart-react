import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLocation, useParams } from 'react-router-dom';


function App() {

  // dark mode toggle
  let darkTheme = localStorage.getItem('darkTheme');
  const [darkMode, setDarkMode] = useState(darkTheme === null ? true : darkTheme === 'true' ? true : false);
  function toggleDarkMode () {
    localStorage.setItem('darkTheme', !darkMode)
    setDarkMode(!darkMode);
  }
  // dark mode toggle

  let currentUrl = useLocation();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-white dark:bg-neutral-800 min-h-screen'>

        <Header 
          darkMode={darkMode} 
          setDarkMode={toggleDarkMode} 
          currentUrl={currentUrl.pathname}
        />

        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App;
