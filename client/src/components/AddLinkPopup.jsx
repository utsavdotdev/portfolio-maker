import React from "react";
import styles from "../css/components/AddLink.module.css";
import { FiX } from "react-icons/fi";
import Input from "./Input";
const AddLinkPopup = ({ state }) => {
  const {popup, setPopup} = state;
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup_container}>
          <div className={styles.title_con}>
            <span className={styles.title}>Add Link</span>
            <FiX
              className={styles.cancel_icon}
              onClick={() => setPopup(!popup)}
            />
          </div>
          <div className={styles.input_wrapper}>
            <Input
              label="Label"
              placeholder="Enter the label"
              style={{ marginBottom: 0, width: "100%" }}
            />
            <Input
              label="Link"
              placeholder="Enter the valid url"
              style={{ marginBottom: 0, width: "100%" }}
            />
            <div className={styles.btn_con}>
                <div className={styles.btn} onClick={() =>setPopup(!popup)}>Cancel</div>
                <div className={styles.btn}>Add</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLinkPopup;
