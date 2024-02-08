import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const [,,, cart] = useOutletContext();

  let subtotal = 0;
  let shippingFee = 10;
  if(cart.length > 0) {
    subtotal = cart.map(item => Math.ceil(item.qty * item.product.price)).reduce((prev, cur) => prev + cur)
  }
  return (
    <div className="p-5 m-5 text-black dark:text-slate-100 bg-white dark:bg-neutral-800 grid grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center">
      <div className="col-span-2 overflow-x-auto max-w-full">
        <table className="border border-collapse border-black dark:border-slate-100">
          <thead>
            <tr className="bg-black dark:bg-slate-100 text-slate-100 dark:text-black">
              <th className="p-5"></th>
              <th className="p-5">Product</th>
              <th className="p-5">Quantity</th>
              <th className="p-5">Price</th>
              <th className="p-5">Total</th>
            </tr>
          </thead>
          {
            cart.length === 0 && 
            <tbody>
              <tr >
                <th className="p-5 text-center font-bold text-black dark:text-slate-100">No item here...</th>
              </tr>
            </tbody>
          }
          {
            cart.length > 0 && 
            <tbody>
            {
              cart.map(item => 
              <tr className="hover:bg-neutral-200 dark:hover:bg-neutral-600" key={item.product.id}>
                <td className="p-5">
                  <img src={item.product.image} className="min-w-24 max-w-24" alt="" />
                </td>
                <td className="p-5">{item.product.title}</td>
                <td className="p-5">{item.qty}</td>
                <td className="p-5">{Math.ceil(item.product.price)}</td>
                <td className="p-5">{Math.ceil(item.product.price * item.qty)}</td>
              </tr>)
            }
            </tbody>
          }
        </table>
      </div>
      <div className="min-w-56 max-w-56">
        <h2 className="text-black dark:text-slate-100 font-extrabold text-xl">Cart Total</h2>
        <div>
            <div className="flex justify-between text-black dark:text-slate-100 py-5">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between text-black dark:text-slate-100 pb-4">
              <p>Shipping</p>
              <p>${shippingFee}</p>
            </div>
            <hr/>
            <div className="flex justify-between text-black dark:text-slate-100 pt-4">
              <p>Total</p>
              <p>${subtotal === 0 ? 0 : subtotal + shippingFee}</p>
            </div>
        </div>
        <button  className="bg-teal-500 w-max self-center p-2 rounded-md hover:opacity-80 active:opacity-100 my-4 font-bold" onClick={() => alert('this will do nothing')}>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart