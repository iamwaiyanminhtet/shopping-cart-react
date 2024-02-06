const Product = () => {
  return (
    <div className="w-48 rounded-lg border-4 border-teal-600 bg-teal-500 dark:bg-neutral-800">
        <div> 
          <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="w-full rounded-lg" alt="" />
        </div>
        <div className="p-2 flex flex-col gap-1">
          <h2 className="text-black dark:text-slate-100 text-xl text-center text-wrap overflow-hidden">Product Name</h2>
          <p className="text-black/85 dark:text-slate-500 text-sm text-center">Description</p>
          <button className="text-center bg-slate-100 p-1 rounded-md ">Add To Cart</button>
        </div>
    </div>
  )
}

export default Product;