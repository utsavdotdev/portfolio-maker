import React, { useState } from "react";
import styles from "../css/components/AddLink.module.css";
import Input from "./Input";
import Popup from "./Popup";
const AddLinkPopup = ({ state }) => {
  const { popup, setPopup, link, setLink } = state;
  const [add, setAdd] = useState({
    name: "",
    url: "",
  });

  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const onAdd = () => {
    link.others.push(add);
    setPopup({ ...popup, addLink: !popup.addLink });
  };
  console.log(link);
  const closePopup = () => {
    setPopup({ ...popup, addLink: !popup.addLink });
  };
  return (
    <>
      <Popup
        title="Add Link"
        close={closePopup}
        style={{ width: "min(360px,90%)" }}
      >
        <div className={styles.input_wrapper}>
          <Input
            label="Label"
            placeholder="Enter the label"
            name="name"
            style={{ marginBottom: 0, width: "100%" }}
            value={add.name}
            onChange={handleChange}
          />
          <Input
            label="Link"
            name="url"
            placeholder="Enter the valid url"
            style={{ marginBottom: 0, width: "100%" }}
            value={add.url}
            onChange={handleChange}
          />
          <div className={styles.btn_con}>
            <div className={styles.btn} onClick={closePopup}>
              Cancel
            </div>
            <div className={styles.btn} onClick={onAdd}>
              Add
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default AddLinkPopup;
