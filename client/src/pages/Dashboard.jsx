import React, { useEffect, useState } from "react";
import styles from "../css/pages/Dashboard.module.css";
import Input from "../components/Input";
import { useOutletContext } from "react-router-dom";
import { GrRotateRight } from "react-icons/gr";
import { links } from "../config/data";

const Dashboard = () => {
  const { pgname, setPagename, popup, setPopup, link, setLink } =
    useOutletContext();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPagename("Setup links");
  }, [pgname]);

  const onSave = () => {
    setPopup({ ...popup, congo: true });
  };

  const handleLinks = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };

  console.log(link);


  return (
    <>
      <form autoComplete="off" action="">
        <div className={styles.link_con}>
          {links.map((data, index) => (
            <Input
              key={index}
              label={data.label}
              placeholder={"Username"}
              name={data.name}
              value={link[data.name]}
              onChange={handleLinks}
            />
          ))}
        </div>
        <div className={styles.btn_con}>
          <button
            className={styles.save_btn}
            onClick={() => onSave()}
            type="button"
          >
            Save
            {loading && (
              <GrRotateRight
                className={loading ? styles.spin : styles.rotate}
              />
            )}
          </button>
          {/* <button
            className={styles.add_btn}
            onClick={() => setPopup({ ...popup, addLink: !popup.addLink })}
            type="button"
          >
            Add
          </button> */}
        </div>
      </form>
    </>
  );
};

export default Dashboard;
