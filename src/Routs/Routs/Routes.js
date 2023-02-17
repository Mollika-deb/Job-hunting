import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import Main from "../../Layout/Main";

 const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default routers;