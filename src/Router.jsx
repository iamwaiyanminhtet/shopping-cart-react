import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/HeroSection";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import ErrorPage from "./components/ErrorPage";

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        { index : true, element : <HeroSection/>  },
        { path : 'shop', element : <AllProducts/> },
        { path : 'cart', element : <Cart/> },
        { path : 'products/:id', element : <ProductDetails/> }
      ],
      errorElement : <ErrorPage/>
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;