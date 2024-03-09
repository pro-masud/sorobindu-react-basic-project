import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Team from "../pages/team/Team";


const publicRouter = [
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
    }
];

// export default public router here
export default publicRouter;