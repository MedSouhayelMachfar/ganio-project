import React, { useContext } from "react";
import { ContextLanguage } from "./../context/ContextLanguageWrapper";

import {
    FeatureGame,
    AvailableGames,
    LevelUp,
    BiggestWinners,
    Counter,
    LatestActivities,
    CommonQuestions
} from "../components/Shared";
import HeaderHome from "../components/Layout/HeaderHome";
import Footer from "../components/Layout/Footer";
import styles from "./Home.module.css";

const Home = () => {
    // Getting data form our languages context
    let { data } = useContext(ContextLanguage);
    return (
        <main className={styles.showcase}>
            <HeaderHome dataContent={data.homeShowcaseContent} />
            <FeatureGame dataContent={data.homeFeatureGameContent} />
            <AvailableGames dataContent={data.homeAvailableGamesContent} />
            <div className={styles["level-up-wrapper"]}>
                <LevelUp dataContent={data.homeLevelUpContent} />
                <BiggestWinners dataContent={data.homeBiggestWinnersContent} />
                <Counter dataContent={data.homeCounterContent} />
                <LatestActivities
                    dataContent={data.homeLatestActivitiesContent}
                />
                <CommonQuestions
                    dataContent={data.homeCommonQuestionsContent}
                />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
