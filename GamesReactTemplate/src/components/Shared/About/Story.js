import React from "react";

import storyIllustration from "./../../../assets/images/storyIllustration.svg";
import Button from "../../UI/Button";
import styles from "./Story.module.css";
function Story(props) {
    const { dataContent } = props;
    return (
        <section className={styles["story-container"]}>
            <div
                className={styles["story-about-us"]}
                style={{ backgroundImage: `url(${storyIllustration})` }}
            >
                <div>
                    <div>
                        <h2>200*</h2>
                        <p>{dataContent.aboutStory.info1}</p>
                    </div>
                    <div>
                        <h2>20 mil.</h2>
                        <p>{dataContent.aboutStory.info2}</p>
                    </div>
                    <div>
                        <h2>2010—</h2>
                        <p>{dataContent.aboutStory.info3}</p>
                    </div>
                </div>
            </div>
            <div className={styles["story-content"]}>
                <h2>{dataContent.leadingBrand.contentHeading}</h2>
                <p>{dataContent.leadingBrand.contentParagraph}</p>
                <div className={styles["story-btn-container"]}>
                    <Button
                        value={dataContent.aboutStory.btn1}
                        className={styles["story-btn-custom-join"]}
                    />
                    <Button
                        value={dataContent.aboutStory.btn2}
                        className={styles["story-btn-custom-read"]}
                    />
                </div>
            </div>
        </section>
    );
}

export default Story;
