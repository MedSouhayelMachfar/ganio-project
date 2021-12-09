import React from "react";
import { SocialMediaBar } from "..";

import winnersAvatar from "./../../../assets/images/winnersAvatar.svg";
import styles from "./Team.module.css";
function Team({ dataContent }) {
    return (
        <section className={styles["story-team"]}>
            <div className={styles["story-team-container"]}>
                <div className={styles["story-team-header"]}>
                    <h2>{dataContent.heading}</h2>
                    <p>{dataContent.paragraph}</p>
                </div>

                <div className={styles["story-team-cards"]}>
                    <div>
                        <img
                            src={winnersAvatar}
                            alt="team ember profile photo1"
                        />
                        <h4>Jane Cooper</h4>
                        <SocialMediaBar />
                    </div>
                    <div>
                        <img
                            src={winnersAvatar}
                            alt="team ember profile photo2"
                        />
                        <h4>Jane Cooper</h4>
                        <SocialMediaBar />
                    </div>
                    <div>
                        <img
                            src={winnersAvatar}
                            alt="team ember profile photo3"
                        />
                        <h4>Jane Cooper</h4>
                        <SocialMediaBar />
                    </div>
                    <div>
                        <img
                            src={winnersAvatar}
                            alt="team ember profile photo4"
                        />
                        <h4>Jane Cooper</h4>
                        <SocialMediaBar />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
