import React from "react";
import styles from "../css/pages/Dashboard.module.css";

const Input = ({ placeholder, label, onChange, name, style }) => {
  return (
    <>
      <div className={styles.input_con} style={style}>
        <span>{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
