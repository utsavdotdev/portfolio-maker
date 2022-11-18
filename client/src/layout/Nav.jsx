import React from "react";
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "../css/pages/Dashboard.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddLinkPopup from "../components/AddLinkPopup";

const Nav = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [pgname, setPagename] = useState("");
  const [popup, setPopup] = useState(false);
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
        <div className={styles.con_wrapper}>
          <div className={styles.main_container}>
            <Outlet context={[pgname, setPagename, popup, setPopup]} />
          </div>
          {pgname === "Customization" && (
            <div className={styles.preview_con}>
              <h2>Preview</h2>
            </div>
          )}
        </div>
      </div>
      {popup && <AddLinkPopup state={[popup, setPopup]} />}
    </>
  );
};

export default Nav;
