import React from "react";
import styles from "../css/components/Page404.module.css";
import { BiHome } from "react-icons/bi";
import { FcHighPriority } from "react-icons/fc";
import {Link} from "react-router-dom"

const Page404 = ({label}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <FcHighPriority className={styles.ico} />
          <div className={styles.msg_box}>
            <span className={styles.bracket}>
              {"{ "}
              <span className={styles.msg}>"message"</span> :
              <span className={styles.text}> "{label}"</span>
              {" }"}
            </span>
          </div>
          <Link className={styles.btn} to="/">
            <BiHome className={styles.icon} />
            Back to home page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
