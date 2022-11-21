import React from "react";
import styles from "../css/components/AddLink.module.css";
import { FiX } from "react-icons/fi";

const Popup = ({ children, title,close,style }) => {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup_container} style={{width:"min(400px,90%)"}}>
          <div className={styles.title_con}>
            <span className={styles.title}>{title}</span>
            <FiX className={styles.cancel_icon} onClick={close}/>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
