import React from "react";
import styles from "../css/components/CircularPortfolio.module.css";
import CircularLink from "./CircularLink";
import { motion } from "framer-motion";

const CircularPortfolio = ({ data }) => {
  const { name, links, customization } = data;

  return (
    <>
      <motion.div
        className={styles.circular_con}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CircularLink links={links.linkedin} style={{ top: "-25px" }} />
        <div>
          <CircularLink links={links.twitter} style={{ top: "-25px" }} />
          <div>
            <CircularLink links={links.youtube} style={{ top: "-25px" }} />
            <div>
              <CircularLink
                links={links.buymeacoffee}
                style={{ top: "-25px" }}
              />
              <div>{/* <GiReactor className={styles.fire} /> */}</div>
              <CircularLink links={links.blog} style={{ bottom: "-25px" }} />
            </div>
            <CircularLink links={links.portfolio} style={{ bottom: "-25px" }} />
          </div>
          <CircularLink links={links.instagram} style={{ bottom: "-25px" }} />
        </div>
        <CircularLink links={links.github} style={{ bottom: "-25px" }} />
      </motion.div>
    </>
  );
};

export default CircularPortfolio;
