import React from "react";
import styles from "../css/components/Preview.module.css";
import Btn from "./Btn";

const Preview = ({ portfolio }) => {
  // const { username, customizations, links, user_img } = portfolio;
  // const { bg_img, border_radius, transition } = customizations;
  const username = portfolio?.username;
  const customizations = portfolio?.customizations;
  const links = portfolio?.links;
  const user_img = portfolio?.user_img;
  const bg_img = customizations?.bg_img;
  const border_radius = customizations?.border_radius;
  const transition = customizations?.transition;

  const convert = () => {
    return transition?.toLowerCase().replace(/\s/g, "");
  };
  let trans = convert();
  return (
    <>
      <div className={styles.preview} id={trans}>
        <img src={bg_img} className={styles.bg_img} />
        <div className={styles.preview_wrapper}>
          <div className={styles.notch}></div>
          <div className={styles.user_con}>
            <div className={styles.user_img}>
              <img src={user_img} />
            </div>
            <span className={styles.username}>@{username}</span>
          </div>
          <div className={styles.links_con}>
            {links?.slice(0, 3).map((link, i) => (
              <Btn
                links={link}
                key={i}
                style={{ borderRadius: border_radius + "px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
