import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/Signup/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import AboutUs from "../Pages/About/AboutUs";
import MyListPage from "../MyList/MyListPage";
import PrivateRoute from "./PrivateRoute";
import AddSpotsPage from "../Pages/Home/AddSpots/AddSpotsPage";
import AllSpots from "../Pages/AllSpots/AllSpots";



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
        },
        {
          path: "/myList",
          element: <PrivateRoute><MyListPage></MyListPage></PrivateRoute>
        },
        {
          path: "/addSpots",
          element: <PrivateRoute><AddSpotsPage></AddSpotsPage></PrivateRoute>
        },
        {
          path: "/allSpots",
          element: <AllSpots></AllSpots>,
          loader: () => fetch('http://localhost:5000/addSpots')
        }
      ]
    },
  ]);



export default router;