import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Team from "../pages/team/Team";
import Layouts from "../component/layouts/layouts";
import Contact from "../pages/contact/Contact";


const publicRouter = [
    {
        element: <Layouts />,
        children: [
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
            }
        ]
    }
];

// export default public router here
export default publicRouter;