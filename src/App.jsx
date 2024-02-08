import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLocation, useParams } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import HeroSection from './components/HeroSection';


function App() {

  const {section} = useParams();

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

  // cart state
  const [cart, setCart] = useState([]);

  function addToCart(productId,qty) {
    const product = allProducts.filter(product => product.id === productId);
    let cartProducts = [...cart];
    cartProducts.push({
      qty : qty,
      product : product[0]
    })
    setCart(cartProducts)
  }
  // cart state

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-white dark:bg-neutral-800 min-h-screen'>

        <Header 
          darkMode={darkMode} 
          setDarkMode={toggleDarkMode} 
          currentUrl={currentUrl.pathname}
        />

        <main>
          <Outlet context={[loading, allProducts, addToCart, cart]}/>
        </main>
      </div>
    </div>
  )
}

export default App;
