import React from "react";
import styles from "../css/components/ToggleSwitch.module.css"

const ToggleSwitch = ({checked,onChange,name}) => {
  
  return (
    <>
      <label className={styles.toggle_switch}>
        <input type="checkbox" name={name} checked={checked} onChange={onChange} />
        <span className={styles.switch} />
      </label>
    </>
  );
};

export default ToggleSwitch;
