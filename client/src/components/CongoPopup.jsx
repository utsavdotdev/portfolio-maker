import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import styles from "../css/components/Congo.module.css";
import Confetti from "react-confetti";
import { AiOutlineTwitter } from "react-icons/ai";

const CongoPopup = ({ state }) => {
  const { popup, setPopup, portfolio } = state;
  console.log(portfolio);
  const [pic, setPic] = useState(200);
  const closePopup = () => {
    setPopup({ ...popup, congo: !popup.congo });
  };
  useEffect(() => {
    // stop confetti after 5 seconds
    setTimeout(() => {
      setPic(0);
    }, 5000);
  }, []);
  const title = `Hi👋, User`;
  const url = portfolio?.url;
  const shareUrl = `http://twitter.com/share?text=Check it out my Portfolio&url=${url}&hashtags=portfolio,devport`;
  return (
    <>
      <Popup
        title={title}
        close={closePopup}
        style={{ width: "min(400px,90%)" }}
      >
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={pic}
          gravity={0.15}
        />

        <div className={styles.congo_con}>
          <span className={styles.heading}>Congratulation🥳</span>
          <span className={styles.text}>
            You have just created <span className={styles.brand}>Dev port</span>
            folio.{" "}
          </span>
          <div className={styles.btn_con}>
            <a href={url} className={styles.btn1} target="_blank">
              Visit
            </a>
            <a href={shareUrl} className={styles.btn2} target="blank">
              Share <AiOutlineTwitter className={styles.twitter} />
            </a>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default CongoPopup;
