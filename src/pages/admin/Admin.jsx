import React from 'react'
import HelmetHas from '../../component/helmetHas/HelmetHas'
import { Link, Outlet } from 'react-router-dom'
import "./admin.scss";

const Admin = () => {
  return (
    <>
      <HelmetHas title={"Admin"}/>
      <h2>Admin page</h2>
      <div className="container admitContainer">
        <div className="admin-left">
          <ul>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="post">Post</Link></li>
            <li><Link to="users">Users</Link></li>
            <li><Link to="Category">Category</Link></li>
            <li><Link to="role">Role</Link></li>
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
