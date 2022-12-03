import React, { useEffect, useState } from "react";
import styles from "../css/components/BigBtn.module.css";
import { link} from "../config/data";

const BigBtn = ({ links, style }) => {
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState();
  const setState = () => {
    for (const [key, value] of Object.entries(link)) {
      if (links.platform === key) {
        setColor(value.color);
        setIcon(value.icon);
      }
    }
  };
  useEffect(() => {
    setState();
  }, [links]);
  return (
    <>
      <a href={links.url} target="_blank">
        <div
          className={styles.btn_con}
          style={{ backgroundColor: color, ...style }}
        >
          <div className={styles.icon}>{icon}</div>
          <span className={styles.link_label}>{links.platform}</span>
        </div>
      </a>
    </>
  );
};

export default BigBtn;
