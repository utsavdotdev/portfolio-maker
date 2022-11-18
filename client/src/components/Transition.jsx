import React from "react";
import styles from "../css/components/Transition.module.css";

const Transition = ({label,checked,onChange}) => {
  return (
    <>
      <label className={styles.transition}>
        <input type="checkbox" checked={checked} onChange={onChange} className={styles.check}/>
        <label>{label}</label>
      </label>
    </>
  );
};

export default Transition;
