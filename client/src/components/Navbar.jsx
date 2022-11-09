import React from "react";
import styles from "../css/components/Navbar.module.css";
import { AiFillFire, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <motion.div
          className={styles.right}
          onClick={() => login()}
          whileTap={{ scale: 0.8 }}
        >
          <button>
            <AiFillGithub />
          </button>
          <p>Login</p>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
