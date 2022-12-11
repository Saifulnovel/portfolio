import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Blog from "../component/Blog/Blog";
import ProjectsDetails from "../component/ProjectsDetails/ProjectsDetails";
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
            },
            {
                path: 'details/:id',
                element: <ProjectsDetails />,
               
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default routes;