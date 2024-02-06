import { useState } from 'react'
import './App.css'
import Header from './components/Header'


function App() {

  // dark mode toggle
  let darkTheme = localStorage.getItem('darkTheme');
  const [darkMode, setDarkMode] = useState(darkTheme === null ? true : darkTheme === 'true' ? true : false);
  function toggleDarkMode () {
    localStorage.setItem('darkTheme', !darkMode)
    setDarkMode(!darkMode);
  }
  // dark mode toggle

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-white dark:bg-neutral-800'>
      <Header darkMode={darkMode} setDarkMode={toggleDarkMode}/>
      </div>
    </div>
  )
}

export default App
