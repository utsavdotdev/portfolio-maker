import React from "react";
import styles from "../css/components/Navbar.module.css";
import {
  AiFillFire,
  AiFillGithub,
  AiOutlineCloudDownload,
  AiOutlineCloudSync, 
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const location = window.location.pathname;
  const login = () => {
    console.log("login");
  };
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.left}>
          <motion.div className={styles.logo} whileTap={{ scale: 0.8 }}>
            <AiFillFire />
          </motion.div>
          <NavLink to="/">
            <h2>Devport</h2>
          </NavLink>
        </div>
        {/* <motion.div
          className={styles.right}
          onClick={() => login()}
          whileTap={{ scale: 0.8 }}
        >
          <button>
            <AiFillGithub />
          </button>
          <p>Login</p>
        </motion.div> */}
        <div className={styles.right}>
          {location === "/app/customization" && (
            <div className={styles.save_con}>
              {/* <span className={styles.saved}>
                <AiOutlineCloudDownload size={28} />
                Saved
              </span> */}
              <span className={styles.saving}>
                <AiOutlineCloudSync size={28} />
                Saving . . .
              </span>
            </div>
          )}
          <div className={styles.user_img}>
            <img src="/pic.png" />
          </div>
          <div className={styles.logout}>
            <FiLogOut />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
