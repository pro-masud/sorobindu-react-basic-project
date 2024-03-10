import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../topbar/Topbar';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layouts = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layouts;
