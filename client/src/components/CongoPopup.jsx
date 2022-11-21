import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import styles from "../css/components/Congo.module.css";
import Confetti from "react-confetti";

const CongoPopup = ({ state }) => {
  const { popup, setPopup } = state;
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

  return (
    <>
      <Popup
        title="Hi👋, User"
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
            <button className={styles.btn1}>Visit</button>
            <div className={styles.btn2}>Share</div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default CongoPopup;
