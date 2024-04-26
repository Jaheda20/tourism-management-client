import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/Signup/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import AboutUs from "../Pages/About/AboutUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>
        },
        {
          path: "/about",
          element: <AboutUs></AboutUs>

        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        }
      ]
    },
  ]);



export default router;