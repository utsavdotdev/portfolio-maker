import React, { useEffect, useState } from "react";
import styles from "../css/pages/Dashboard.module.css";
import Input from "../components/Input";
import { useOutletContext } from "react-router-dom";
import { GrRotateRight } from "react-icons/gr";

const Dashboard = () => {
  const {pgname, setPagename,popup,setPopup} = useOutletContext();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPagename("Setup links");
  }, [pgname]);

  return (
    <>
      <form autoComplete="off" action="">
        <div className={styles.link_con}>
          <Input label="github.com/" placeholder={"Username"} name="github" />
          <Input label="twitter.com/" placeholder={"Username"} name="twitter" />
          <Input
            label="linkedin.com/in/"
            placeholder={"Username"}
            name="linkedin"
          />
          <Input
            label="instagram.com/"
            placeholder={"Username"}
            name="instagram"
          />
          <Input label="youtube.com/" placeholder={"Username"} name="youtube" />
          <Input
            label="buymeacoffee.com/"
            placeholder={"Username"}
            name="buymeacoffee"
          />
          <Input label={"Blog"} placeholder={"Blog URL"} name={"blog"} />
          <Input
            label={"Portfolio"}
            placeholder={"Portfolio URL"}
            name={"portfolio"}
          />
        </div>
        <div className={styles.btn_con}>
          <button
            className={styles.save_btn}
            onClick={() => setLoading(!loading)}
          >
            Save
            {loading && (
              <GrRotateRight
                className={loading ? styles.spin : styles.rotate}
              />
            )}
          </button>
          <button
            className={styles.add_btn}
            onClick={() => setPopup(!popup)}
            type="button"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
