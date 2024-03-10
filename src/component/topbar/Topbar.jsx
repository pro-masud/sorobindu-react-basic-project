import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './topbar.scss'
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container tobarContainer">
            <div className="tobar-left">
                <ul>
                    <li><FaPhone />01797562295</li>
                    <li><FaPhoneFlip />01797562295</li>
                    <li><MdEmail />info@sorobindu.com</li>
                </ul>
            </div>
            <div className="tobar-right">
                <div className="topbarform">
                    <Link>Login</Link>
                    <Link>Register</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topbar;
