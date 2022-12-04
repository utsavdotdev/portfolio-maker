import React from "react";
import styles from "../css/components/Loader.module.css";
import {AiFillFire} from "react-icons/ai"


const Loader = () => {
  return (
    <>
      <div className={styles.con}>
        <div class="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
          <AiFillFire className="load_icon"/>
        </div>
      </div>
    </>
  );
};

export default Loader;
