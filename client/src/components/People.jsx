import React from "react";
import styles from "../css/components/People.module.css";
import { BsArrowUpRight } from "react-icons/bs";

const People = ({ data }) => {
  const { username, url, status,user_img } = data;
  return (
    <>
      <div className={styles.people_con}>
        <div className={styles.left_con}>
          <div className={styles.img_con}>
            <img src={user_img} />
          </div>
          <span>{username}</span>
        </div>
        <div className={styles.right_con}>
          <div className={styles.status_con}>
            {status ? (
              <>
                <span className={styles.green}></span>
                <span className={styles.status}>Active</span>
              </>
            ) : (
              <>
                <span className={styles.red}></span>
                <span className={styles.status}>Offline</span>
              </>
            )}
          </div>
          <a href={url} className={styles.visit_btn} target="_blank">
            <span className={styles.visit_text}>Visit</span>
            <BsArrowUpRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default People;
