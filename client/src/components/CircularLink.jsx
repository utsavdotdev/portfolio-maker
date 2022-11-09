import React, { useEffect, useState } from "react";
import styles from "../css/components/CircularLink.module.css";
import { link } from "../config/data";

const CircularLink = ({ links,style }) => {
  const [color, setColor] = useState("");
  const [icon,setIcon] = useState();
  const setState = () => {
    for (const [key, value] of Object.entries(link)) {
      if (links.name === key) {
        setColor(value.color);
        setIcon(value.icon);
      }
    }
  };

  useEffect(() => {
    setState();
  }, [links]);
  return (
    <span className={styles.link} style={{ backgroundColor: color,...style }} >
      <a href={links.url} target="_blank">
        {icon}
      </a>
    </span>
  );
};

export default CircularLink;
