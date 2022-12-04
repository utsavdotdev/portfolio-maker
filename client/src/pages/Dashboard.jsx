import React, { useEffect, useState } from "react";
import styles from "../css/pages/Dashboard.module.css";
import Input from "../components/Input";
import { useOutletContext } from "react-router-dom";
import { GrRotateRight, GrToast } from "react-icons/gr";
import { links } from "../config/data";
import { toast } from "react-hot-toast";
import { postLink, updateLink } from "../api/api";

const Dashboard = () => {
  const { pgname, setPagename, popup, setPopup, link, setLink, user } =
    useOutletContext();
  const _id = user[0]?._id;
  const username = user[0]?.username;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPagename("Setup links");
  }, [pgname]);

  //experimental things
  // if (link === undefined) {
  //   return <div className={styles.load}>Loading . . .</div>;
  // }

  const onSave = async () => {
    //check that at least four link is filled
    let count = 0;
    for (const [key, value] of Object.entries(link)) {
      if (value !== "") {
        count++;
      }
    }
    if (count < 4) {
      return toast.error("Please fill at least four links");
    }
    toast.loading("Saving...", {
      id: "save",
    });
    setLoading(!loading);
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
        user_img: user[0]?.profilePic,
      });
      if (res.status === 201) {
        setLoading(false);
        toast.remove("save");
        return setPopup({ ...popup, congo: true });
      }
      if (res.status === 203) {
        const updateRes = await updateLink({ user_id: _id, links: allLinks });
        if (updateRes) {
          setLoading(false);
          toast.remove("save");
          toast.success(updateRes.data.msg);
        }
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

  const clear = () => {
    if (loading) {
      return;
    }
    //check that at least one link is filled to clear
    let count = 0;
    for (const [key, value] of Object.entries(link)) {
      if (value !== "") {
        count++;
      }
    }
    if (count < 1) {
      return toast.error("Nothing to clear", {
        duration: 1000,
      });
    }
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
              placeholder={
                data.name === "blog" || data.name === "portfolio"
                  ? "Link"
                  : "Username"
              }
              name={data.name}
              onChange={handleLinks}
              value={link === undefined ? "" : link[data.name]}
            />
          ))}
        </div>
        <div className={styles.btn_con}>
          <button
            className={styles.save_btn}
            onClick={() => onSave()}
            disabled={loading}
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
            onClick={() => clear()}
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
