import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRouter from "./privetRouter";


const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// export default router here 
export default router;