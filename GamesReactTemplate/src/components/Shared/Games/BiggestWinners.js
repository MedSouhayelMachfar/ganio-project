import React from "react";

import BiggestWinnersHeader from "./../../../assets/images/BiggestWinnersHeader.svg";
import JackpotWinner from "./../../../assets/images/JackpotWinner.svg";
import winnersAvatar from "./../../../assets/images/winnersAvatar.svg";
import firstWinner from "./../../../assets/images/firstWinner.svg";
import secondWinner from "./../../../assets/images/secondWinner.svg";
import thirdWinner from "./../../../assets/images/thirdWinner.svg";
import { WinnerItem } from "./../../Shared";
import styles from "./BiggestWinners.module.css";
function BiggestWinners(props) {
    const { dataContent } = props;
    return (
        <section className={styles["biggest-winners"]}>
            <div className={styles["biggest-winners-heading"]}>
                <h2>
                    {dataContent.headingPart1}{" "}
                    <span>{dataContent.headingPart2}</span>
                </h2>
                <p>{dataContent.paragraph}</p>
            </div>
            <div className={styles["biggest-winners-content"]}>
                <div className={styles.jackpot}>
                    <img src={JackpotWinner} alt="jackpot" />
                    <img src={winnersAvatar} alt="todays winners" />
                    <p>&euro; 496</p>
                </div>
                <div className={styles["three-mvps"]}>
                    <img src={BiggestWinnersHeader} alt="header" />
                    <WinnerItem
                        imgUrl={firstWinner}
                        photoUrl={winnersAvatar}
                        winnerName="Bessie cooper"
                        winnerPrize={56.65994}
                        className={styles["custom-item"]}
                    />
                    <WinnerItem
                        imgUrl={secondWinner}
                        photoUrl={winnersAvatar}
                        winnerName="Bessie cooper"
                        winnerPrize={56.65994}
                        className={styles["custom-item"]}
                    />
                    <WinnerItem
                        imgUrl={thirdWinner}
                        photoUrl={winnersAvatar}
                        winnerName="Bessie cooper"
                        winnerPrize={56.65994}
                        className={styles["custom-item"]}
                    />
                </div>
            </div>
        </section>
    );
}

export default BiggestWinners;
