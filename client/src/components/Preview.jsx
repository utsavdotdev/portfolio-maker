import React from "react";
import styles from "../css/components/Preview.module.css";
import Btn from "./Btn";

const Preview = ({user}) => {
    const {name,customization} = user;
    const {bg_color,bg_img,border_radius,transition} = customization;
  return (
    <>
      <div className={styles.preview}>
        <img src={bg_img} className={styles.bg_img} />
        <div className={styles.preview_wrapper}>
          <div className={styles.notch}></div>
          <div className={styles.user_con}>
            <div className={styles.user_img}>
              <img src="/pic.png" />
            </div>
            <span className={styles.username}>@{name}</span>
          </div>
          <div className={styles.links_con}>
            {user.links.slice(0, 3).map((link,i) => (
              <Btn links={link} key={i} style={{borderRadius:border_radius+"px"}} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
