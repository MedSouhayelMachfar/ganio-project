import React, { useContext } from "react";
import { ContextLanguage } from "../context/ContextLanguageWrapper";

import { useParams } from "react-router";

import Header from "../components/Layout/Header";
import Details from "./../components/Shared/Tournaments/Details";
import TopTournamentGames from "./../components/Shared/Tournaments/TopTournamentGames";
import Features from "./../components/Shared/Tournaments/Features";
import Footer from "../components/Layout/Footer";
import bgTournaments from "./../assets/images/bgTournaments.svg";
import styles from "./TournamentDetails.module.css";

// This data should be in a context
const dummyData = [
    {
        id: 1,
        type: "bet",
        title: "Farwell june",
        price: 6.0,
        bet: 0.2,
        tournamentStartsAt: "07-07-2021",
        tournamentEndsAt: "08-07-2021"
    },
    {
        id: 2,
        type: "bet",
        title: "Drops & Wins",
        price: 6.0,
        bet: 0.2,
        tournamentStartsAt: "07-07-2021",
        tournamentEndsAt: "08-07-2021"
    },
    {
        id: 3,
        type: "bet",
        title: "Live Casino",
        price: 6.0,
        bet: 0.2,
        tournamentStartsAt: "07-07-2021",
        tournamentEndsAt: "08-07-2021"
    },
    {
        id: 4,
        type: "bet",
        title: "Monthly Race",
        price: 6.0,
        bet: 0.2,
        tournamentStartsAt: "07-07-2021",
        tournamentEndsAt: "08-07-2021"
    },
    {
        id: 5,
        type: "bet",
        title: "Top Provider",
        price: 6.0,
        bet: 0.2,
        tournamentStartsAt: "07-07-2021",
        tournamentEndsAt: "08-07-2021"
    },
    {
        id: 6,
        type: "bet",
        title: "Slot of the Week",
        price: 5.0,
        bet: 0.2,
        tournamentStartsAt: "07-07-2021",
        tournamentEndsAt: "08-07-2021"
    }
];

function TournamentDetails() {
    const { data } = useContext(ContextLanguage);
    let { id } = useParams();
    const [currentTournament, setCurrentTournament] = React.useState({});

    React.useEffect(() => {
        setCurrentTournament(
            () => dummyData.filter((item) => item.id === +id)[0]
        );
    }, [id, currentTournament]);
    return (
        <div className={styles["tournaments-page"]}>
            <Header
                title={data.header.tournamentsTitle}
                pageLocation={data.header.tournamentsPageLocation}
                bgImg={bgTournaments}
            />
            <div>
                <Details
                    data={currentTournament}
                    className={styles["tournament-page__details"]}
                />
                <TopTournamentGames
                    className={styles["tournament-page__top-tournaments"]}
                />
                <Features />
            </div>
            <Footer />
        </div>
    );
}

export default TournamentDetails;
