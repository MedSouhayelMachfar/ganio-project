import React, { useContext } from "react";

import Button from "./../UI/Button";
import GridCards from "./GridCards.js";
import rightArrow from "./../../assets/icons/rightArrow.svg";

import styles from "./AvailableGames.module.css";
import { ContextLanguage } from "../../context/ContextLanguageWrapper";
function AvailableGames(props) {
    const { dataContent } = props;
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;
    return (
        <section className={styles["available-game"]}>
            <div
                className={`${styles["available-content"]} ${
                    rtlClass && styles[rtlClass]
                }`}
            >
                <div>
                    <h2>{dataContent.heading}</h2>
                    <p>{dataContent.paragraph}</p>
                </div>
                <div>
                    <Button
                        value={dataContent.btn1}
                        icon={rightArrow}
                        className={styles["available-game-fix"]}
                    />
                    <Button
                        value={dataContent.btn2}
                        icon={rightArrow}
                        className={styles["available-game-fix"]}
                    />
                </div>
            </div>
            <GridCards className={styles["grid-fix-position"]} />
        </section>
    );
}

export default AvailableGames;
