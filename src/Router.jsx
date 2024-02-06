import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/HeroSection";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        { index : true, element : <HeroSection/>  },
        { path : 'shop', element : <AllProducts/> },
        { path : 'cart', element : <Cart/> },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;