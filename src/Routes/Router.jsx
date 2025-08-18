import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        element: <h1>Auth</h1>
    },
    {
        path: "*",
        element: <h1>Error 404!</h1>
    },
]);
export {router};