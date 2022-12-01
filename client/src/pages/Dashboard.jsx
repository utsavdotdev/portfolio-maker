import React, { useEffect, useState } from "react";
import styles from "../css/pages/Dashboard.module.css";
import Input from "../components/Input";
import { useOutletContext } from "react-router-dom";
import { GrRotateRight } from "react-icons/gr";
import { links } from "../config/data";
import { postLink, updateLink } from "../api/api";

const Dashboard = () => {
  const { pgname, setPagename, popup, setPopup, link, setLink, user } =
    useOutletContext();
  const { _id, username } = user[0];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPagename("Setup links");
  }, [pgname]);

  const onSave = async () => {
    //check that at least four link is filled
    let count = 0;
    for (const [key, value] of Object.entries(link)) {
      if (value !== "") {
        count++;
      }
    }
    if (count < 4) {
      return alert("Please fill at least four links");
    }

    let allLinks = [];

    //map the link object to links array
    Object.keys(link).map((key) => {
      allLinks.push({
        platform: key,
        url: link[key],
      });
    });

    //filter the links url which are not empty
    allLinks = allLinks.filter((link) => link.url !== "");

    //join the label of links array which matches the platform
    allLinks = allLinks.map((link) => {
      for (const [key, value] of Object.entries(links)) {
        if (link.platform === value.name) {
          if (link.platform === "blog" || link.platform === "portfolio") {
            continue;
          }
          link.url = "https://" + value.label + link.url;
        }
      }
      return link;
    });

    console.log(allLinks);

    //setting data
    const name = username.trim().toLowerCase().replace(/\s/g, "");

    //url of the app
    const appUrl = window.location.origin;
    const url = `${appUrl}/${name}`;

    try {
      const res = await postLink({
        user_id: _id,
        username: name,
        links: allLinks,
        url: url,
      });
      if (res.status === 201) {
        console.log(res.data.msg);
        return setPopup({ ...popup, congo: true });
      }
      if (res.status === 203) {
        console.log(res.data.msg);
        const updateRes = await updateLink({ user_id: _id, links: allLinks });
        console.log(updateRes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinks = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };

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
          <button
            className={styles.add_btn}
            onClick={() =>
              setLink({
                github: "",
                linkedin: "",
                twitter: "",
                instagram: "",
                youtube: "",
                portfolio: "",
                facebook: "",
                buymeacoffee: "",
                blog: "",
              })
            }
            type="button"
          >
            Clear all
          </button>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
