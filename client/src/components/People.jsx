import React from "react";
import styles from "../css/components/People.module.css";
import { BsArrowUpRight } from "react-icons/bs";

const People = () => {
  return (
    <>
      <div className={styles.people_con}>
        <div className={styles.left_con}>
          <div className={styles.img_con}>
            <img src="/pic.png" />
          </div>
          <span>
            utsavbhattarai
          </span>
        </div>
        <div className={styles.right_con}>
          <div className={styles.status_con}>
            <span className={styles.sign}></span>
            <span className={styles.status}>Online</span>
          </div>
          <div className={styles.visit_btn}>
            <span className={styles.visit_text}>Visit</span>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
