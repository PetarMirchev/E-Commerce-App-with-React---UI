import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import ErrorPage from "./pages/Error/ErrorPage";
import './app.scss';


// to use Navbar & Footer always in the project in all splits
const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

//all possible paths for the user
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,   
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ]
  },
]);




function App() {
  return (
    <div className="">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
