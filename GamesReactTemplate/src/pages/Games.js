import React, { useContext } from "react";
import { ContextLanguage } from "./../context/ContextLanguageWrapper";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { LatestActivities, LevelUp } from "./../components/Shared";
import AvailableGames from "../components/Shared/Games/AvailableGames";
import BiggestWinners from "../components/Shared/Games/BiggestWinners";
import bgGames from "./../assets/images/bgGames.svg";
import styles from "./Games.module.css";
function Games() {
    // Getting data form our languages context
    let { data } = useContext(ContextLanguage);

    return (
        <div className={styles["games-page"]}>
            <Header
                title={data.header.gamesTitle}
                pageLocation={data.header.gamesPageLocation}
                bgImg={bgGames}
            />
            <AvailableGames dataContent={data.gamesAvailableGamesContent} />
            <BiggestWinners dataContent={data.gamesBiggestWinnersContent} />
            <LatestActivities
                className={styles["fixing-latest-height"]}
                dataContent={data.gamesLatestActivitiesContent}
            />
            <LevelUp
                className={styles["fixing-position"]}
                dataContent={data.gamesLevelUpContent}
            />
            <Footer />
        </div>
    );
}

export default Games;
