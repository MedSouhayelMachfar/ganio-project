import React, { useContext } from "react";
import { ContextLanguage } from "../context/ContextLanguageWrapper";

import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import TournamentsGames from "../components/Shared/Tournaments/TournamentsGames";
import bgTournaments from "./../assets/images/bgTournaments.svg";
import styles from "./Tournaments.module.css";
function Tournaments() {
    const { data } = useContext(ContextLanguage);
    return (
        <div className={styles["tournaments-page"]}>
            <Header
                title={data.header.tournamentsTitle}
                pageLocation={data.header.tournamentsPageLocation}
                bgImg={bgTournaments}
            />
            <TournamentsGames />
            <Footer />
        </div>
    );
}

export default Tournaments;
