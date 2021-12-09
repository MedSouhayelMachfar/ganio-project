import React from "react";

import Button from "./../UI/Button";
import { TopThreeWinners } from "./../Shared";
import todaysWinnersImage from "./../../assets/images/todaysWinnersBg.svg";
import trophyImage from "./../../assets/images/trophy.svg";
import styles from "./BiggestWinners.module.css";

function BiggestWinners(props) {
    const { dataContent } = props;
    return (
        <div
            className={styles["biggest-winners"]}
            style={{ backgroundImage: `URL(${todaysWinnersImage})` }}
        >
            <div className={styles["biggest-winners-wrapper"]}>
                <div className={styles["biggest-winners-content"]}>
                    <h2>
                        {dataContent.word1} <span> {dataContent.word2}</span>{" "}
                        {dataContent.word3}
                    </h2>
                    <Button value={dataContent.btn} />
                </div>
                <img src={trophyImage} alt="trophy for winners" />
                <TopThreeWinners />
            </div>
        </div>
    );
}

export default BiggestWinners;
