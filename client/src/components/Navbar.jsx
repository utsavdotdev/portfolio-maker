import React, { useEffect } from "react";
import styles from "../css/components/Navbar.module.css";
import {
  AiFillFire,
  AiOutlineGoogle,
  AiOutlineCloudDownload,
  AiOutlineCloudSync,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { NavLink } from "react-router-dom";
import { auth } from "../api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const Navbar = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const location = window.location.pathname;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const mutation = useMutation({
    mutationFn: data => auth(data),
    onSuccess: ({data}) => {
      localStorage.setItem("access", data.accessToken);
      localStorage.setItem("refresh", data.refreshToken);
      console.log(data.msg);
    },
  });
  const onFailure = (err) => {
    console.log(err);
  };

  const onSuccess = async (res) => {
    const { profileObj } = res;
    mutation.mutate({
      username: profileObj.name,
      email: profileObj.email,
      profilePic: profileObj.imageUrl,
    });
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    onFailure,
  });
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
          onClick={signIn}
          whileTap={{ scale: 0.8 }}
        >
          <button>
            <AiOutlineGoogle />
          </button>
          <p>Login</p>
        </motion.div>
        {/* <div className={styles.right}>
          {location === "/app/customization" && (
            <div className={styles.save_con}>
              <span className={styles.saved}>
                <AiOutlineCloudDownload size={28} />
                Saved
              </span>
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
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
