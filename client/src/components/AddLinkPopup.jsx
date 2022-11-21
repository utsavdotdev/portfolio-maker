import React from "react";
import styles from "../css/components/AddLink.module.css";
import Input from "./Input";
import Popup from "./Popup";
const AddLinkPopup = ({ state }) => {
  const { popup, setPopup } = state;
  const closePopup = () =>{
    setPopup({...popup,addLink:!popup.addLink})
  }
  return (
    <>
      <Popup title="Add Link" close={closePopup} style={{width:"min(360px,90%)"}} >
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
            <div className={styles.btn} onClick={closePopup}>
              Cancel
            </div>
            <div className={styles.btn}>Add</div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default AddLinkPopup;
