import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import BgImg from "../components/BgImg";
import Transition from "../components/Transition";
import styles from "../css/pages/Customization.module.css";
import { bg, transition } from "../config/data.jsx";

const Customization = () => {
  const {
    pgname,
    setPagename,
    portfolio,
    setPortfolio,
    check,
    setCheck,
    imgCheck,
    setImgCheck,
  } = useOutletContext();

  useEffect(() => {
    setPagename("Customization");
  }, [pgname]);

  const handleTrans = (e) => {
    const index = transition.findIndex((item) => item.label === e.target.name);
    const newCheck = check.map((item, i) => (i === index ? true : false));
    setCheck(newCheck);
    setPortfolio({
      ...portfolio,
      customization: { ...portfolio.customization, transition: e.target.name },
    });
  };

  const handleImg = (e) => {
    const index = bg.findIndex((item) => item.src === e.target.name);
    const newCheck = imgCheck.map((item, i) => (i === index ? true : false));
    setImgCheck(newCheck);
    setPortfolio({
      ...portfolio,
      customization: { ...portfolio.customization, bg_img: e.target.name },
    });
  };
  return (
    <>
      <div className={styles.custom_container}>
        <div className={styles.transition_container}>
          <div className={styles.title}>Transition</div>
          <div className={styles.transition_wrapper}>
            {transition.map((data, i) => (
              <Transition
                label={data.label}
                key={i}
                checked={check[i]}
                onChange={handleTrans}
              />
            ))}
          </div>
        </div>

        <div className={styles.center_row}>
          <div className={styles.center_con}>
            <div className={styles.title}>Border Radius</div>
            <div className={styles.slider}>
              <input
                type="range"
                max="20"
                value={portfolio.customization?.border_radius}
                onChange={({ target: { value: radius } }) => {
                  setPortfolio({
                    ...portfolio,
                    customization: {
                      ...portfolio.customization,
                      border_radius: radius,
                    },
                  });
                }}
              />
              <div className={styles.data}>
                {portfolio.customization?.border_radius}
              </div>
            </div>
          </div>
          <div className={styles.center_con}>
            <div className={styles.title}>Background color</div>
            <div className={styles.color}>
              <input
                type="color"
                className={styles.color_picker}
                value={portfolio.customization.bg_color}
                onChange={({ target: { value: code } }) => {
                  setPortfolio({
                    ...portfolio,
                    customization: {
                      ...portfolio.customization,
                      bg_color: code,
                    },
                  });
                }}
              />
              <span className={styles.color_hex}>
                {portfolio.customization.bg_color}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.bottom_con}>
          <div className={styles.title}>Background image</div>
          <div className={styles.bg_image_wrapper}>
            {bg.slice(0, 6).map((img, i) => (
              <BgImg
                img={img.src}
                key={i}
                checked={imgCheck[i]}
                onChange={handleImg}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.msg_con}>
        <span className={styles.msg}>
          The customization is not available in small view
        </span>
      </div>
    </>
  );
};

export default Customization;
