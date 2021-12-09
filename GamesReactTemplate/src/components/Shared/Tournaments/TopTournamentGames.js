import React from "react";

import trLeftArrow from "./../../../assets/icons/trLeftArrow.svg";
import placeholderImg from "./../../../assets/images/placeholderImg.svg";
import trRightArrow from "./../../../assets/icons/trRightArrow.svg";
import styles from "./TopTournamentGames.module.css";
function TopTournamentGames(props) {
  return (
    <div className={`${styles["top-tournament-games"]} ${props.className}`}>
      <div className={styles["top-tournament-games__header"]}>
        <h4>Top tournament games section</h4>
        <div>
          <img src={trLeftArrow} alt="left arrow" />
          <img src={trRightArrow} alt="right arrow" />
        </div>
      </div>
      <div className={styles["top-tournament-games__img"]}>
        <img src={placeholderImg} alt="random placeholder" />
        <img src={placeholderImg} alt="random placeholder" />
        <img src={placeholderImg} alt="random placeholder" />
        <img src={placeholderImg} alt="random placeholder" />
      </div>
    </div>
  );
}

export default TopTournamentGames;
