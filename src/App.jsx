import { useEffect, useState } from 'react'
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

  // get current url to select nav element styles
  let currentUrl = useLocation();
  // get current url to select nav element styles

  // fetch data
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    // fetch data
    async function getProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setAllProducts(data);
    }

  // try catch
   try {
    getProducts()
   } catch (error) {
    setError(error)
   } finally {
    setLoading(false);
   }
  },[]);
  // fetch data

  console.log(`outside`, allProducts)
  console.log(`outside`, loading)

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
