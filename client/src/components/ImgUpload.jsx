import React from "react";
import Popup from "./Popup";
import styles from "../css/components/ImgUpload.module.css";
import axios from "../config/axios";
import { FiUpload } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

const ImgUpload = ({ state, id }) => {
  const { setUpload, upload } = state;
  const [pic, setPic] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const closePopup = () => {
    setUpload(!upload);
  };
  const picUpload = (e) => {
    const [file] = e.target.files;
    setPic(URL.createObjectURL(file));
    getImgUrl(file);
  };

  //Upload image and get img url
  const getImgUrl = async (file) => {
    try {
      const formData = new FormData();
      formData.append("profile", file);
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { msg, imgUrl } = res.data;
      console.log(msg);
      setUrl(imgUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpload = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const res = await axios.patch(
        "/user/pic",
        {
          _id: id,
          profilePic: url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        setTimeout(() => {
          setLoading(false);
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Popup
        title="Upload Image"
        close={closePopup}
        style={{ width: "min(360px,90%)" }}
      >
        <div className={styles.img_upload_con}>
          <div className={styles.img_upload}>
            {pic ? (
              <>
                <img src={pic} />
                <div className={styles.close} onClick={() => setPic("")}>
                  <MdCancel />
                </div>
              </>
            ) : (
              <div className={styles.upload_overlay}>
                <input type="file" name="img" onChange={picUpload} />
                <FiUpload />
              </div>
            )}
          </div>
          <div className={styles.upload_btn} onClick={onUpload}>
            {loading ? "Uploading..." : "Upload image"}
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ImgUpload;
