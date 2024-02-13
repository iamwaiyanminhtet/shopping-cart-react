import { useContext, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"
import { AppContext } from "../App";
import CartIcon from "../assets/cart.svg"


const ProductDetails = () => {

    const { id } = useParams();
    const { allProducts, addToCart, setAddedToCart, addedToCart } = useContext(AppContext);
    let product = allProducts.filter(product => product.id === Number(id));
    const curProduct = product[0];

    let [counter, setCounter] = useState(0);

    return (
        <div>
            { id > 20 && <Navigate to='/' replace={true} />} 

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
            {curProduct &&
            <section style={{ minHeight: 'calc(100vh - 88px)' }} className="p-5 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src={curProduct.image} alt="" width='300px' />
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <h2 className="text-black dark:text-slate-100 font-bold text-2xl lg:text-5xl">{curProduct.title}</h2>
                    <p className="text-black dark:text-slate-300">{curProduct.description}</p>
                    <p className="text-black dark:text-slate-100">Price - {Math.ceil(curProduct.price)}</p>
                    <p className="text-black dark:text-slate-100">Rating - {curProduct.rating.rate}</p>
                    <div className="flex justify-start m-1 gap-3">
                        <button className="bg-black text-slate-100 dark:bg-white dark:text-black px-2 rounded-md font-bold hover:opacity-80 active:opacity-100" onClick={() => setCounter(prev => prev > 0 ? --prev : 0)}>-</button> 
                        <span className="text-black dark:text-slate-100 ">{counter}</span>
                        <button className="bg-black text-slate-100 dark:bg-white dark:text-black px-2 rounded-md font-bold hover:opacity-80 active:opacity-100" onClick={() => setCounter(prev => ++prev)}>+</button>
                        
                        <button  className="bg-teal-500 rounded-md hover:opacity-80 active:opacity-100 px-2" onClick={() => addToCart(curProduct.id, counter)}>
                        <img src={CartIcon} alt="" className="min-w-5 max-w-5 text-white"/>
                        </button>
                    </div>
                </div>
            </section>
            }
        </div>
    )
}

export default ProductDetails