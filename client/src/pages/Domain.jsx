import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { updateName } from "../api/api";
import { toast } from "react-hot-toast";
import styles from "../css/pages/Domain.module.css";

const Domain = () => {
  const { pgname, setPagename, portfolio, setPortfolio, user } =
    useOutletContext();
  const _id = user[0]?._id;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPagename("Domain configuration");
  }, [pgname]);

  const handleChange = (e) => {
    setPortfolio({ ...portfolio, username: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if(portfolio.username === ""){
        return toast.error("Hmm! username");
      }
      setLoading(!loading);
      const res = await updateName({
        user_id: _id,
        username: portfolio.username,
      });
      if (res) {
        toast.success(res.data.msg);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className={styles.domain_con}>
        <div className={styles.input_wrapper}>
          <div className={styles.input_con}>
            <span>devport.me/</span>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={portfolio.username}
              onChange={handleChange}
            />
          </div>
          <button type="button" className={styles.w_btn} onClick={handleSubmit} disabled={loading}>
            Update
          </button>
        </div>
        <div className={styles.input_wrapper}>
          <div className={styles.input_con}>
            <input type="text" placeholder="(Coming Soon) Username" disabled />
            <span>.devport.me</span>
          </div>
          <button type="button" className={styles.n_btn} disabled>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Domain;
