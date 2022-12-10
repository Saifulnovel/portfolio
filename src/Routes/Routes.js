import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Home from "../Main/Home/Home";
import Main from "../Main/Main/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main> </Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element:<About></About>
            }
        ]
    }
])

export default routes;