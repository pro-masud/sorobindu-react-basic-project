import React from 'react';
import "./header.scss";
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { activeRouter } from '../../helper/helper.js';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <div className="container header-container">
          <div className="header-left">
            <div className="logo">
              <Link href="/"><img src={logo} alt="" /></Link>
            </div>
          </div>
          <div className="header-right">
            <ul className='menu'>
              <li><Link className={location.pathname === "/" ? "active" : " "} to="/">Home</Link></li>
              <li><Link className={activeRouter(location.pathname, "admin") ? "active" : " "} to="/admin">Admin</Link></li>
              <li><Link className={location.pathname === "/about" ? "active" : " "} to="/about">About</Link></li>
              <li><Link className={location.pathname === "/blog" ? "active" : " "} to="/blog">Blog</Link></li>
              <li><Link className={location.pathname === "/team" ? "active" : " "} to="/team">Team</Link></li>
              <li><Link className={location.pathname === "/contact" ? "active" : " "} to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
