import React from "react";
import { useState, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ContextProvider } from "../config/Context";
import styles from "../css/pages/Dashboard.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddLinkPopup from "../components/AddLinkPopup";
import Preview from "../components/Preview";

const Nav = () => {
  const location = useLocation();
  const {pathname} = location;
  const [isAuth, setIsAuth] = useState(true);
  const [pgname, setPagename] = useState("");
  const { usr, pop } = useContext(ContextProvider);
  const [user, setUser] = usr;
  const [popup, setPopup] = pop;

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
            <Outlet
              context={{ pgname, setPagename, user, setUser, popup, setPopup }}
            />
          </div>
          <div
            className={styles.preview_con}
            style={{
              backgroundColor: user.customization.bg_color,
              display: pathname === "/app/customization" ? "" : "none",
            }}
          >
            <Preview user={user} />
          </div>
        </div>
      </div>
      {popup && <AddLinkPopup state={{ popup, setPopup }} />}
    </>
  );
};

export default Nav;
