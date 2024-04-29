import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/Signup/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import MyListPage from "../MyList/MyListPage";
import PrivateRoute from "./PrivateRoute";
import AddSpotsPage from "../Pages/AddSpots/AddSpotsPage";
import AllSpots from "../Pages/AllSpots/AllSpots";
import SpotDetails from "../Pages/AllSpots/SpotDetails";
import UpdatePage from "../MyList/UpdatePage";
import SelectedSpots from "../Pages/SelectedSpots/SelectedSpots";



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
          loader: () => fetch('https://tourism-management-project-server.vercel.app/addSpots')
        },
        {
          path: "/spotDetails/:id",
          element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://tourism-management-project-server.vercel.app/addSpots/${params.id}`)
        },
        {
          path: "/updatePage/:id",
          element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
          loader: ({params})=>fetch(`https://tourism-management-project-server.vercel.app/addSpots/${params.id}`)       
        },
        {
          path: "/selectedSpots/:country",
          element: <SelectedSpots></SelectedSpots>,
          loader: ({params})=>fetch(`https://tourism-management-project-server.vercel.app/selectedSpots/${params.country}`)
        }
        
      ]
    },
  ]);



export default router;