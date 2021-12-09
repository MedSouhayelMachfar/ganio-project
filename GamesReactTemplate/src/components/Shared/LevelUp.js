import React, { useContext } from "react";

import levelupimg from "./../../assets/images/levelUpIllustration.svg";
import freespinsimg from "./../../assets/images/freespins.svg";
import bonusesimg from "./../../assets/images/bonuses.svg";
import tournamentsimg from "./../../assets/images/tournaments.svg";

import styles from "./../Shared/LevelUp.module.css";
import { ContextLanguage } from "../../context/ContextLanguageWrapper";
function LevelUp(props) {
    const { dataContent } = props;
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    return (
        <section className={`${styles["level-up"]} ${props.className}`}>
            <div className={styles["level-up-wrapper"]}>
                <img src={levelupimg} alt="gamer desktop setup" />
                <div
                    className={`${styles["level-up-content"]} ${
                        rtlClass && styles[rtlClass]
                    }`}
                >
                    <h2>{dataContent.heading}</h2>
                    <p className="medium-text">{dataContent.paragraph}</p>
                    <div className={styles["level-up-figure-container"]}>
                        <figure>
                            <img src={freespinsimg} alt="freespinsimg" />
                            <figcaption className={"medium-text"}>
                                {dataContent.caption1}
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={bonusesimg} alt="gift img" />
                            <figcaption>{dataContent.caption2}</figcaption>
                        </figure>
                        <figure>
                            <img
                                src={tournamentsimg}
                                alt="prise of a tournament"
                            />
                            <figcaption>{dataContent.caption3}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LevelUp;
