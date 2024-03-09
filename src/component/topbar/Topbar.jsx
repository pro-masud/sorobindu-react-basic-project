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
                    <li><a href="#"><FaPhone />01797562295</a></li>
                    <li><a href="#"><FaPhoneFlip />01797562295</a></li>
                    <li><a href="#"><MdEmail />info@sorobindu.com</a></li>
                </ul>
            </div>
            <div className="tobar-right">
                <div className="topbarform">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topbar;
