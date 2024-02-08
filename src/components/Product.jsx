import { useState } from "react";


const Product = ({product, addToCart}) => {

  let [counter, setCounter] = useState(0);

  return (
    <div className="w-48 rounded-lg border-4 border-teal-600 bg-teal-500 dark:bg-neutral-800">
        <div> 
          <img src={product.image} className="w-full rounded-lg max-h-46" alt="" />
        </div>
        <div className="p-2 flex flex-col gap-1">
          <h2 className="text-black dark:text-slate-100 text-xl text-center text-wrap overflow-hidden">{product.title}</h2>
          <p className="text-black/85 dark:text-slate-500 text-sm text-center">$ {Math.round(product.price)}</p>
          <div className="flex justify-between m-1">
            <button className="bg-black text-slate-100 dark:bg-white dark:text-black px-2 rounded-md font-bold hover:opacity-80 active:opacity-100" onClick={() => setCounter(prev => prev > 0 ? --prev : 0)}>-</button> 
            <span className="text-black dark:text-slate-100 ">{counter}</span>
            <button className="bg-black text-slate-100 dark:bg-white dark:text-black px-2 rounded-md font-bold hover:opacity-80 active:opacity-100" onClick={() => setCounter(prev => ++prev)}>+</button>
            
            <button  className="bg-teal-500 rounded-md hover:opacity-80 active:opacity-100 px-2" onClick={() => addToCart(product.id, counter)}>Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Product;