import React, { useContext } from "react";
import { ContextLanguage } from "./../../../context/ContextLanguageWrapper";

import storyMulti from "./../../../assets/icons/storyMulti.svg";
import storyFast from "./../../../assets/icons/storyFast.svg";
import storySecurity from "./../../../assets/icons/storySecurity.svg";
import storyTransparent from "./../../../assets/icons/storyTransparent.svg";
import storyLeadingBrand from "./../../../assets/images/storyLeadingBrand.svg";
import styles from "./LeadingBrand.module.css";
function LeadingBrand({ dataContent }) {
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    return (
        <section
            className={styles["story-leading-brand"]}
            style={{ backgroundImage: `url(${storyLeadingBrand})` }}
        >
            <div
                className={` ${styles["story-leading-container"]} ${
                    rtlClass && styles.rtlClass
                }`}
            >
                <div className={styles["story-leading-content"]}>
                    <h2>{dataContent.heading}</h2>
                    <p>{dataContent.paragraph}</p>
                </div>
                <div className={styles["story-leading-items"]}>
                    <div>
                        <img src={storyMulti} alt="icon for multi accounts" />
                        <h4>{dataContent.item1}</h4>
                    </div>
                    <div>
                        <img
                            src={storyTransparent}
                            alt="icon for Transparent"
                        />
                        <h4>{dataContent.item2}</h4>
                    </div>
                    <div>
                        <img src={storySecurity} alt="icon for Security" />
                        <h4>{dataContent.item3}</h4>
                    </div>
                    <div>
                        <img src={storyFast} alt="icon for Fast withdraw" />
                        <h4>{dataContent.item4}</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeadingBrand;
