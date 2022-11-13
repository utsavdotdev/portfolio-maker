import React from "react";
import styles from "../css/components/LoadingPeople.module.css";

const LoadingPeople = () => {
  return (
    <>
      <div className={styles.loading_con}>
        <div className={styles.left_con}>
          <div className={styles.img_con}>
          </div>
          <span></span>
        </div>
        <div className={styles.right_con}>
          <div className={styles.status_con}>
          </div>
          <div className={styles.visit_btn}>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPeople;
