import React from "react";

import rightArrow from "./../../assets/icons/rightArrow.svg";
import styles from "./WinnerItem.module.css";
function WinnerItem(props) {
  const { imgUrl, imgAlt, photoUrl, photoAlt, winnerName, winnerPrize } = props;
  return (
    <div className={`${styles.winner} ${props.className}`}>
      <img src={imgUrl} alt={photoAlt ? photoAlt : "random winner icon"} />
      <div className={styles["winner-content"]}>
        <div>
          <img src={photoUrl} alt={imgAlt ? imgAlt : "personalPhoto"} />
          <p>{winnerName}</p>
        </div>

        <div>
          <span>+{winnerPrize}</span>
          <span>ETH</span>
          <img src={rightArrow} alt="rightArrow icon" />
        </div>
      </div>
    </div>
  );
}

export default WinnerItem;
