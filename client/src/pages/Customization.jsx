import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import BgImg from "../components/BgImg";
import Transition from "../components/Transition";
import styles from "../css/pages/Customization.module.css";
import { bg } from "../config/data.jsx";

const Customization = () => {
  const [value, setValue] = useState(20);
  const [color, setColor] = useState("#000000");
  const [pgname, setPagename] = useOutletContext();
  useEffect(() => {
    setPagename("Customization");
  }, [pgname]);
  return (
    <>
      <div className={styles.custom_container}>
        <div className={styles.transition_container}>
          <div className={styles.title}>Transition</div>
          <div className={styles.transition_wrapper}>
            <Transition label="From right" />
            <Transition label="From left" />
            <Transition label="From top" />
            <Transition label="From bottom" />
            <Transition label="Fade in" />
            <Transition label="Fade up" />
          </div>
        </div>

        <div className={styles.center_row}>
          <div className={styles.center_con}>
            <div className={styles.title}>Border Radius</div>
            <div className={styles.slider}>
              <input
                type="range"
                max="100"
                value={value}
                onChange={({ target: { value: radius } }) => {
                  setValue(radius);
                }}
              />
              <div className={styles.data}>{value}</div>
            </div>
          </div>
          <div className={styles.center_con}>
            <div className={styles.title}>Background color</div>
            <div className={styles.color}>
              <input
                type="color"
                className={styles.color_picker}
                value={color}
                onChange={({ target: { value: code } }) => {
                  setColor(code);
                }}
              />
              <span className={styles.color_hex}>{color}</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom_con}>
          <div className={styles.title}>Background image</div>
          <div className={styles.bg_image_wrapper}>
            {bg.slice(0,6).map((img,i) => (
              <BgImg img={img.src} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customization;
