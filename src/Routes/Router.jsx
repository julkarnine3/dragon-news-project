import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";

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
                loader: ()=>fetch('/public/news.json'),
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
        path: "*",
        element: <h1>Error 404!</h1>
    },
]);
export {router};