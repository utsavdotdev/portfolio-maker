import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../css/pages/Profile.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import ToggleSwitch from "../components/ToggleSwitch";

const Profile = () => {
  const { pgname, setPagename } = useOutletContext();
  const [isToggled, setIsToggled] = useState(false);
  
  useEffect(() => {
    setPagename("Profile");
  }, [pgname]);

  const onToggle = () => setIsToggled(!isToggled);
  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile_data}>
          <div className={styles.left}>
            <img src="/pic.png" />
          </div>
          <div className={styles.right}>
            <div className={styles.name_con}>
              <span className={styles.label}>
                <FiUser className={styles.icon} />
                Username:
              </span>
              <span className={styles.name}>utsavbhattarai</span>
            </div>
            <div className={styles.visit_btn}>
              <span className={styles.visit_text}>Visit portfolio</span>
              <BsArrowUpRight />
            </div>
          </div>
        </div>
        <div className={styles.profile_status}>
          <div className={styles.status_con}>
            <div className={styles.views}>
              <span className={styles.title}>Views</span>
              <span className={styles.data}>1000</span>
            </div>
            <div className={styles.status}>
              <span className={styles.title}>Status</span>
              <span className={styles.data}>
                <div className={styles.green}></div>Active
              </span>
            </div>
          </div>
          <div className={styles.change_status}>
            <span className={styles.change_text}>
              Change status:
              <ToggleSwitch checked={isToggled} onChange={onToggle} />
            </span>
          </div>
        </div>
        <div className={styles.profile_newsletter}>
          <IoMail className={styles.mail} />
          <div className={styles.wrap}>
            <span className={styles.email_title}>
              Subscribe newsletter:
              <ToggleSwitch checked={isToggled} onChange={onToggle} />
            </span>
            <span className={styles.text}>
              *Notify Engagement through email
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
