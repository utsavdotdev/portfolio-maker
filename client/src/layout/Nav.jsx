import React from "react";
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "../css/pages/Dashboard.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Nav = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [pgname,setPagename] = useState("")
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.page_name}>{pgname}</div>
        <div className={styles.main_container}>
          <Outlet context={[pgname,setPagename]}/>
        </div>
      </div>
    </>
  );
};

export default Nav;
