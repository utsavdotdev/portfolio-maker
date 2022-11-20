import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../css/pages/Domain.module.css";

const Domain = () => {
  const {pgname, setPagename} = useOutletContext();
  useEffect(() => {
    setPagename("Domain configuration");
  }, [pgname]);

  return (
    <>
      <div className={styles.domain_con}>
        <div className={styles.input_wrapper}>
          <div className={styles.input_con}>
            <span>devport.me/</span>
            <input type="text" placeholder="Username" />
          </div>
          <button type="button" className={styles.w_btn}>Update</button>
        </div>
        <div className={styles.input_wrapper}>
          <div className={styles.input_con}>
            <input type="text" placeholder="(Coming Soon) Username" disabled/>
            <span>.devport.me</span>
          </div>
          <button type="button" className={styles.n_btn} disabled>Update</button>
        </div>
      </div>
    </>
  );
};

export default Domain;
