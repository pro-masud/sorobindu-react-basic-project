import React from 'react'
import HelmetHas from '../../component/helmetHas/HelmetHas'
import { Link, Outlet, useLocation } from 'react-router-dom'
import "./admin.scss";
import { activeRouter } from '../../helper/helper.js';

const Admin = () => {
  const location = useLocation();
  return (
    <>
      <HelmetHas title={"Admin"}/>
      <h2>Admin page</h2>
      <div className="container admitContainer">
        <div className="admin-left">
          <ul>
            <li><Link className={activeRouter(location.pathname, "dashboard") ? "active" : " "} to="dashboard">Dashboard</Link></li>
            <li><Link className={activeRouter(location.pathname, "post") ? "active" : " "} to="post">Post</Link></li>
            <li><Link className={activeRouter(location.pathname, "users") ? "active" : " "} to="users">Users</Link></li>
            <li><Link className={activeRouter(location.pathname, "category") ? "active" : " "} to="category">Category</Link></li>
            <li><Link className={activeRouter(location.pathname, "role") ? "active" : " "} to="role">Role</Link></li>
          </ul>
        </div>
        <div className="admin-right">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Admin
