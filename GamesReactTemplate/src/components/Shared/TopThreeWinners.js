import React from "react";

import WinnerItem from "./WinnerItem";
import firstWinner from "./../../assets/images/firstWinner.svg";
import secondWinner from "./../../assets/images/secondWinner.svg";
import thirdWinner from "./../../assets/images/thirdWinner.svg";
import winnersAvatar from "./../../assets/images/winnersAvatar.svg";
import BiggestWinnersHeader from "./../../assets/images/BiggestWinnersHeader.svg";
import TopWinnerRibbon from "./../../assets/images/TopWinnerRibbon.svg";
import styles from "./TopThreeWinners.module.css";
function TopThreeWinners() {
  return (
    <div className={styles["top-three-winners"]}>
      <img src={BiggestWinnersHeader} alt="header for top three winners" />
      <img src={TopWinnerRibbon} alt="Ribbon for rank one" />
      <WinnerItem
        imgUrl={firstWinner}
        photoUrl={winnersAvatar}
        winnerName="Bessie cooper"
        winnerPrize={56.65994}
      />
      <WinnerItem
        imgUrl={secondWinner}
        photoUrl={winnersAvatar}
        winnerName="jerome bell"
        winnerPrize={56.65994}
      />
      <WinnerItem
        imgUrl={thirdWinner}
        photoUrl={winnersAvatar}
        winnerName="darrell steward"
        winnerPrize={56.65994}
      />
    </div>
  );
}

export default TopThreeWinners;
