import { AppContext } from "../App";
import Product from "./Product"
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";


const AllProducts = () => {
  const {allProducts, addToCart, addedToCart, setAddedToCart} = useContext(AppContext);
  const [displayProducts, setDisplayProducts] = useState(allProducts || []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    // fetch data
    async function getProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setDisplayProducts(data);
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

  // get all categories
  let categories = [];
  allProducts.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  // filter products by category
  function filterByCategory(category) {
    if(category === 'all') {
      setDisplayProducts(allProducts);
      return;
    }
    let filterProducts = [...allProducts];
    let filteredProducts = filterProducts.filter(product => product.category === category)
    setDisplayProducts(filteredProducts);
  }

  // search products with name
  function searchWithName(value) {
    let modifiedValue = value.trim().toLowerCase();
    if(value === '') {
      setDisplayProducts(allProducts);
      return;
    }
    let searchProducts = [...allProducts];
    let searchedProducts = searchProducts.filter(product => product.title.toLowerCase().startsWith(modifiedValue) || product.title.includes(modifiedValue))
    setDisplayProducts(searchedProducts);
  }

  return (
    <section style={{minHeight : 'calc(100vh - 88px)'}} className="p-5">
      {loading && <div>Loading.....</div>}
      {error && <div>{error.message}</div>}
      {allProducts.length > 0 && 
       <div>
        <div className="flex items-center flex-col md:flex-row gap-2 lg:flex-row">
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 mx-5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => filterByCategory(e.target.value)}>
            <option defaultValue value="all">Choose a category...</option>
            {
              categories.map((category, index) => 
              <option key={index} value={category}>{category}</option>)
            }
          </select>
          <div className="flex">
            <input type="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search with name..." onChange={(e) => searchWithName(e.target.value)}/>
            <button className="bg-teal-500 w-max self-center p-2  hover:opacity-80 active:opacity-100">Search</button>
          </div>
        </div>
       { addedToCart &&  
       <div className="px-5 mt-3">
        <div id="alert-3" className="flex items-center p-4 mb-4 text-teal-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-teal-500" role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-medium">
            Added to <Link to="/cart" className="underline font-bold" replace="true">cart</Link>
          </div>
          <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-teal-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close" onClick={() => setAddedToCart(false)}>
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
        </div>}
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-5">
          {
            displayProducts.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)
          }
        </div>
       </div>
      }
    </section>
  )
}

export default AllProducts