import React from "react";
import GridCards from "../GridCards";

import SearchBar from "./SearchBar";
import styles from "./AvailableGames.module.css";
function AvailableGames(props) {
    const { dataContent } = props;
    return (
        <section className={styles["available-games"]}>
            <div className={styles["available-games-heading"]}>
                <h2>
                    {dataContent.headingPart1}{" "}
                    <span>{dataContent.headingPart2}</span>
                </h2>
                <p>{dataContent.paragraph}</p>
            </div>
            <SearchBar />
            <GridCards />
        </section>
    );
}

export default AvailableGames;
