import React from "react";
import CircularPortfolio from "../components/CircularPortfolio";
import styles from "../css/pages/Hero.module.css";
import {motion} from "framer-motion"
import { data } from "../config/data";
const Hero = () => {
  return (
    <>
      <motion.div
        className={styles.hero_container}
      >
        <div className={styles.hero_content}>
          <motion.div
            className={styles.left_content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ ease:"linear", duration: 0.6}}
          >
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
          </motion.div>
          <div className={styles.right_content}>
            {/* Rotaing portfolio */}
            <CircularPortfolio data={data} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
