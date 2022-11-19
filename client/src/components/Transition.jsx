import React from "react";
import styles from "../css/components/Transition.module.css";

const Transition = ({ label, checked, onChange }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.check}
        />
        <label className={styles.transition}>
          <label>{label}</label>
        </label>
      </div>
    </>
  );
};

export default Transition;
