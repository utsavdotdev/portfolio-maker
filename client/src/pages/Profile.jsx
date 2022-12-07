import React, { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import styles from "../css/pages/Profile.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { FiUser, FiUpload } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import ToggleSwitch from "../components/ToggleSwitch";
import ImgUpload from "../components/ImgUpload";
import { useMutation } from "@tanstack/react-query";
import { updateOther } from "../api/api";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { pgname, setPagename, user, setPortfolio, portfolio } =
    useOutletContext();
  const [upload, setUpload] = useState(false);
  const [load, setLoad] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setPagename("Profile");
  }, [pgname]);

if (portfolio === undefined) {
  toast.error("Setup your link");
  return <Navigate to={"/app"} />;
}
  const name = user[0]?.username.trim().toLowerCase().split(" ");
  const { mutate: updateProfile } = useMutation({
    mutationFn: (data) => updateOther(data),
    onSuccess: ({ data }) => {
      setLoad(false);
      toast.success(data.msg);
    },
  });

  useEffect(() => {
    if (!check) {
      return;
    }
    if (!load) {
      setLoad(true);
      setTimeout(() => {
        updateProfile({
          user_id: user[0]?._id,
          data: {
            status: portfolio?.status,
            newsletter: portfolio?.newsletter,
          },
        });
      }, 1000);
    }
  }, [portfolio?.status, portfolio?.newsletter]);

  const onToggle = (e) => {
    if (!load) {
      setCheck(true)
      setPortfolio({
        ...portfolio,
        [e.target.name]: !portfolio[e.target.name],
      });
    }
  };

  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile_data}>
          <div className={styles.left}>
            <img src={user[0]?.profilePic} />
            <div className={styles.overlay} onClick={() => setUpload(!upload)}>
              <FiUpload />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.name_con}>
              <span className={styles.label}>
                <FiUser className={styles.icon} />
                Username:
              </span>
              <span className={styles.name}>{name}</span>
            </div>
            <a href={portfolio?.url} className={styles.visit_btn} target="_blank">
              <span className={styles.visit_text}>Visit portfolio</span>
              <BsArrowUpRight />
            </a>
          </div>
        </div>
        <div className={styles.profile_status}>
          <div className={styles.status_con}>
            <div className={styles.views}>
              <span className={styles.title}>Views</span>
              <span className={styles.data}>{portfolio?.views}</span>
            </div>
            <div className={styles.status}>
              <span className={styles.title}>Status</span>
              <span className={styles.data}>
                {portfolio?.status ? (
                  <>
                    <div className={styles.green}></div>Active
                  </>
                ) : (
                  <>
                    <div className={styles.red}></div>Offline
                  </>
                )}
              </span>
            </div>
          </div>
          <div className={styles.change_status}>
            <span className={styles.change_text}>
              Change status:
              <ToggleSwitch
                name="status"
                checked={portfolio?.status}
                onChange={onToggle}
              />
            </span>
          </div>
        </div>
        <div className={styles.profile_newsletter}>
          <IoMail className={styles.mail} />
          <div className={styles.wrap}>
            <span className={styles.email_title}>
              Subscribe newsletter:
              <ToggleSwitch
                name="newsletter"
                checked={portfolio?.newsletter}
                onChange={onToggle}
              />
            </span>
            <span className={styles.text}>
              *Notify Engagement through email
            </span>
          </div>
        </div>
      </div>
      {upload && <ImgUpload state={{ setUpload, upload }} id={user[0]?._id} />}
    </>
  );
};

export default Profile;
