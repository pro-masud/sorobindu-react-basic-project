import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Team from "../pages/team/Team";
import Contact from "../pages/contact/Contact";
import Admin from "../pages/admin/Admin";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "/team",
        element: <Team/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/admin",
        element: <Admin/>
    }
]);


// export default router here
export default router;