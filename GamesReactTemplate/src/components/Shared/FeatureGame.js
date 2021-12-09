import React, { useContext } from "react";

import PlayWinEarn from "./PlayWinEarn";
import Button from "./../UI/Button";
import rightArrow from "./../../assets/icons/rightArrow.svg";
import Carousel from "./Carousel";
import styles from "./FeatureGame.module.css";

import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

function FeatureGame({ dataContent }) {
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;
    return (
        <section className={styles["feature-game"]}>
            <PlayWinEarn className={styles["pwe-fix-position"]} />
            <div
                className={`${styles["feature-content"]} ${
                    rtlClass && styles[rtlClass]
                }`}
            >
                <div>
                    <h2>{dataContent.heading}</h2>
                    <p>{dataContent.paragraph}</p>
                </div>
                <Button value={dataContent.btn} icon={rightArrow} />
            </div>
            <Carousel />
        </section>
    );
}

export default FeatureGame;
