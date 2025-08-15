import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout
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