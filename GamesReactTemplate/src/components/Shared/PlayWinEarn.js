import React, { useContext } from "react";

import { ContextLanguage } from "../../context/ContextLanguageWrapper";

import earnImage from "./../../assets/images/earn.svg";
import winImage from "./../../assets/images/win.svg";
import playImage from "./../../assets/images/play.svg";

import styles from "./PlayWinEarn.module.css";
function PlayWinEarn(props) {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);
    data = data.homePlayWinEarnContent;

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    return (
        <div
            className={`${styles.pwe} ${props.className} ${
                rtlClass && styles.rtlClass
            }`}
        >
            <div className={styles.item}>
                <img src={playImage} alt="play icon" />
                <div>
                    <h4>{data.headingCard1}</h4>
                    <p className=".medium-text">{data.paragraphCard1}</p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={winImage} alt="win icon" />
                <div>
                    <h4>{data.headingCard2}</h4>
                    <p className=".medium-text">{data.paragraphCard2}</p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={earnImage} alt="earn icon" />
                <div>
                    <h4>{data.headingCard3}</h4>
                    <p className=".medium-text">{data.paragraphCard3}</p>
                </div>
            </div>
        </div>
    );
}

export default PlayWinEarn;
