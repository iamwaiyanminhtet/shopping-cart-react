import { useOutletContext } from "react-router-dom"
import Product from "./Product"

const AllProducts = () => {
  
  const [loading, products, addToCart] = useOutletContext();

  return (
    <section style={{minHeight : 'calc(100vh - 88px)'}} className="p-5">
      {loading && <div>Loading.....</div>}
      {products.length > 0 && 
       <div>
        <div>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value>Choose a category...</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-5">
          {
            products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)
          }
        </div>
       </div>
      }
    </section>
  )
}

export default AllProducts