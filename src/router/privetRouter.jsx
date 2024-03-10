import Layouts from "../component/layouts/layouts";
import Admin from "../pages/admin/Admin";

const privateRouter = [
    {
        element: <Layouts/>,
        children: [
            {
                path: "/admin",
                element: <Admin/>
            }
        ]
    }
];

// export default private router
export default privateRouter;