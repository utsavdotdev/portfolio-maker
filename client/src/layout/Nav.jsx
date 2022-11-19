import React from "react";
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "../css/pages/Dashboard.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddLinkPopup from "../components/AddLinkPopup";
import Preview from "../components/Preview";

const Nav = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [pgname, setPagename] = useState("");
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState({
    name: "utsavbhattarai",
    links: [
      {
        name: "github",
        url: "https://github.com/utsavbhattarai007",
        label: "github.com/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/utsavbhattarai007/",
        label: "linkedin.com/in/",
      },
      {
        name: "twitter",
        url: "https://twitter.com/utsavbhattarai7",
        label: "twitter.com/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/utsavbhattarai007/",
        label: "instagram.com/",
      },
      {
        name: "youtube",
        url: "",
        label: "youtube.com/",
      },
      {
        name: "portfolio",
        url: "https://utsavbhattarai.info.np",
        label: "Portfolio",
      },
      {
        name: "buymeacoffee",
        url: "https://www.buymeacoffee.com/utsavbhattarai",
        label: "buymeacoffee.com/",
      },
      {
        name: "blog",
        url: "https://blog.utsavbhattarai.info.np",
        label: "Blog",
      },
    ],
    customization: {
      transition: "",
      border_radius: 4,
      bg_color: "#1e1f1f",
      bg_img: "/bg/bg1.jpg",
    },
  });
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
            <Outlet context={[pgname, setPagename, user, setUser,popup,setPopup]} />
          </div>
          {pgname === "Customization" && (
            <div
              className={styles.preview_con}
              style={{ backgroundColor: user.customization.bg_color }}
            >
              <Preview user={user} />
            </div>
          )}
        </div>
      </div>
      {popup && <AddLinkPopup state={[popup, setPopup]} />}
    </>
  );
};

export default Nav;
