import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                path:'',
                Component: Home,
            },
            {
                path:"/category/:id",
                loader: ()=>fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>,
                Component: CategoryNews,
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                Component: Login,
            },
            {
                path:"/auth/register",
                Component: Register,
            }
        ]
        
    },
    {
        path:'/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute> ,
        loader: ()=> fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "*",
        element: <h1>Error 404!</h1>
    },
]);
export {router};