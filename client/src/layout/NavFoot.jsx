import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContextProvider } from "../config/Context";

const NavFoot = () => {
  const { usr } = useContext(ContextProvider);
  const [user,setUser] = usr;
  const token = localStorage.getItem("access");

  if(token){
    return <Navigate to="/app"/>
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavFoot;
