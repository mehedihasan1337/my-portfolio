import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../pages/Home";
import About from './../pages/About';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/about",
                element: <About></About>,

            }
        ]
    },

]);



export default router;