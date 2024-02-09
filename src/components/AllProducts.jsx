import { AppContext } from "../App";
import Product from "./Product"
import { useState, useEffect, useContext } from 'react'


const AllProducts = () => {
  const {allProducts, addToCart} = useContext(AppContext);
  const [displayProducts, setDisplayProducts] = useState(allProducts || [])

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