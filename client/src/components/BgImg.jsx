import React from "react";
import styles from "../css/components/BgImg.module.css";

const BgImg = ({ checked, onChange,img}) => {
  return (
    <>
      <div className={styles.bg_img_con}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.bg_check}
        />
        <div className={styles.bg_img}>
            <img src={img}/>
        </div>
      </div>
    </>
  );
};

export default BgImg;
