import React from "react";
import CircularPortfolio from "../components/CircularPortfolio";
import styles from "../css/pages/Hero.module.css";
import { IoIosCreate, IoIosShareAlt, IoIosSettings } from "react-icons/io";
import { motion } from "framer-motion";
import { data } from "../config/data";
const Hero = () => {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <div className={styles.left_content} id="fadein">
            <div className={styles.hero_title}>
              <div>
                Introducing{" "}
                <span className={styles.logo_name}>
                  <h3>Devport</h3>
                  <h3>Devport</h3>
                </span>
                <br />
              </div>
              <span>A mini Portfolio maker</span>
            </div>
            <p>
              Create miniature portfolio, Customize it as you want, Try
              different awesome Animation and transition effects, and share it
              with your friends.
            </p>
          </div>
          <div className={styles.right_content}>
            {/* Rotaing portfolio */}
            <CircularPortfolio data={data} />
          </div>
        </div>
      </div>
      <div className={styles.service_con}>
        <p className={styles.service_title}>Features</p>
        <div className={styles.feature_con}>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <IoIosCreate />
            </div>
            <p className={styles.feature_title}>Create</p>
            <p className={styles.feature_des}>
              Create a awesome portfolio in just a minute
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <IoIosSettings />
            </div>
            <p className={styles.feature_title}>Customize</p>
            <p className={styles.feature_des}>
              Customize transition, color, animation and many more
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <IoIosShareAlt />
            </div>
            <p className={styles.feature_title}>Share</p>
            <p className={styles.feature_des}>
              Share it and increase your engagement
            </p>
          </div>
        </div>
      </div>
      <div className={styles.who_con}>
        <div className={styles.who}>
          <div className={styles.who_left}>
            <span className={styles.who_title}>Who’s using <br/>devport?</span>
            <span className={styles.who_des}>
              Here are some awesome people who has just made their portfolio.
            </span>
          </div>
          <div className={styles.who_right}>
            <div className={styles.who_column1}>
              <div className={styles.who_img}>
                
              </div>
              <div className={styles.who_img}>

              </div>
              <div className={styles.who_img}>

              </div>
            </div>
            <div className={styles.who_column2}>
              <div className={styles.who_img}>
                
              </div>
              <div className={styles.who_img}>

              </div>
              <div className={styles.who_img}>

              </div>
            </div>
            <div className={styles.who_column3}>
              <div className={styles.who_img}>
                
              </div>
              <div className={styles.who_img}>

              </div>
              <div className={styles.who_img}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
