import Layouts from "../component/layouts/layouts";
import Admin from "../pages/admin/Admin";
import Category from "../pages/admin/pages/category/Category";
import Dashboard from "../pages/admin/pages/dashboard/Dashboard";
import Posts from "../pages/admin/pages/posts/Posts";
import Role from "../pages/admin/pages/role/Role";
import Users from "../pages/admin/pages/users/Users";

const privateRouter = [
    {
        element: <Layouts/>,
        children: [
            {
                path: "/admin",
                element: <Admin/>,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard/>
                    },
                    {
                        path: "post",
                        element: <Posts/>
                    },
                    {
                        path: "users",
                        element: <Users/>
                    },
                    {
                        path: "category",
                        element: <Category/>
                    },
                    {
                        path: "role",
                        element: <Role/>
                    },
                ]
            }
        ]
    }
];

// export default private router
export default privateRouter;