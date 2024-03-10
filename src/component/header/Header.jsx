import React from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Header = () => {
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
