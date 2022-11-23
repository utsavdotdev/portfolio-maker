import React from "react";
import styles from "../css/pages/Portfolio.module.css";
import { user } from "../config/data";
import BigBtn from "../components/BigBtn";
import {BsBatteryFull} from "react-icons/bs";
import {MdOutlineSignalCellularAlt} from "react-icons/md"
import {TiWiFi} from "react-icons/ti";

const Portfolio = () => {
  const { name, customization } = user;
  const { bg_img, border_radius, transition,bg_color } = customization;
  const convert = () => {
    return transition.toLowerCase().replace(/\s/g, "");
  };
  const trans = convert();
  return (
    <>
      <div className={styles.portfolio_con} id={trans} style={{backgroundColor:bg_color}}>
        <div className={styles.portfolio}>
          <img src={bg_img} className={styles.bg_img} />
          <div className={styles.portfolio_wrapper}>
            <div className={styles.notch}></div>
            <div className={styles.props}>
              <BsBatteryFull />
              <MdOutlineSignalCellularAlt />
              <TiWiFi />
            </div>
            <div className={styles.user_con}>
              <div className={styles.user_img}>
                <img src="/pic.png" />
              </div>
              <span className={styles.username}>@{name}</span>
            </div>
            <div className={styles.links_con}>
              {user.links.map((link, i) => (
                <BigBtn
                  links={link}
                  key={i}
                  style={{ borderRadius: border_radius + "px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.credit}>
        <a href="https://devport.me">
          <span>Powered by Devport</span>
        </a>
      </div>
    </>
  );
};

export default Portfolio;
