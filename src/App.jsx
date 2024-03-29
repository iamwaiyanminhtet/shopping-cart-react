import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom';

const AppContext = createContext({
  allProducts : [],
  cart : [],
  addToCart : () => {},
  addedToCart : false,
  setAddedToCart : () => {}
})


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
   }catch (error) {
    console.log(error)
   }
  },[]);
  // fetch data

  // cart state
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  function addToCart(productId,qty) {
    if(qty === 0) {
      return;
    }
    const product = allProducts.filter(product => product.id === productId);
      let cartProducts = [...cart];
      cartProducts.push({
          qty : qty,
          product : product[0]
      })
      setCart(cartProducts);
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 6000);
  }
  // addedToCartNotification remove
  // cart state

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-white dark:bg-neutral-800 min-h-screen'>

        <Header 
          darkMode={darkMode} 
          setDarkMode={toggleDarkMode} 
          currentUrl={currentUrl.pathname}
          cart={cart}
        />

        <main>
          <AppContext.Provider value={{allProducts, cart, addToCart, addedToCart, setAddedToCart}}>
            <Outlet/>
          </AppContext.Provider>
        </main>
      </div>
    </div>
  )
}

export default App;
export { AppContext };
