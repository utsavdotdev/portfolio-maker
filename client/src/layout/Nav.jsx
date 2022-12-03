import React from "react";
import { useState, useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ContextProvider } from "../config/Context";
import styles from "../css/pages/Dashboard.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Preview from "../components/Preview";
import CongoPopup from "../components/CongoPopup";
import Page from "../components/Page";

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const [pgname, setPagename] = useState("");
  const token = localStorage.getItem("access");
  const { port, pop, chk, imgChk, lk, usr, c } = useContext(ContextProvider);
  const [cload, setCload] = c;
  const [portfolio, setPortfolio] = port;
  const [user, setUser] = usr;
  const [popup, setPopup] = pop;
  const [link, setLink] = lk;

  //state for transition
  const [check, setCheck] = chk;

  //state for bg image
  const [imgCheck, setImgCheck] = imgChk;

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Page title={pgname}>
        <Navbar />
        <Sidebar />
        <div className={styles.container}>
          <div className={styles.page_name}>{pgname}</div>
          <div className={styles.con_wrapper}>
            <div className={styles.main_container}>
              <Outlet
                context={{
                  pgname,
                  setPagename,
                  portfolio,
                  setPortfolio,
                  popup,
                  setPopup,
                  check,
                  setCheck,
                  imgCheck,
                  setImgCheck,
                  link,
                  setLink,
                  user,
                  setUser,
                  setCload,
                  cload,
                }}
              />
            </div>
            <div
              className={styles.preview_con}
              style={{
                backgroundColor: portfolio.customization.bg_color,
                display: pathname === "/app/customization" ? "" : "none",
              }}
            >
              <Preview portfolio={portfolio} />
            </div>
          </div>
        </div>
        {/* {popup.addLink && <AddLinkPopup state={{ popup, setPopup,link,setLink}} />} */}
        {popup.congo && <CongoPopup state={{ popup, setPopup }} />}
        <Toaster reverseOrder={true} />
      </Page>
    </>
  );
};

export default Nav;
