import React, { useContext } from "react";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

import GridTournaments from "./GridTournaments";
import styles from "./TournamentsGames.module.css";
import { ContextLanguage } from "../../../context/ContextLanguageWrapper";
function TournamentsGames() {
    const { data } = useContext(ContextLanguage);
    let dataContent = data.tournamentsHeaderContent;
    return (
        <section className={styles["tournaments-games"]}>
            <div className={styles["tournaments-games-heading"]}>
                <h2>
                    {dataContent.headingPart1}{" "}
                    <span>{dataContent.headingPart2} </span>
                </h2>
                <p>{dataContent.paragraph}</p>
            </div>
            <SearchBar />
            <FilterBar />
            <GridTournaments />
        </section>
    );
}

export default TournamentsGames;
