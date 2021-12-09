import React from "react";

import TournamentItem from "./TournamentItem";
import styles from "./GridTournaments.module.css";
import Button from "../../UI/Button";

const dummyData = [
  {
    id: 1,
    title: "Farwell june",
    price: 6.0,
    bet: 0.2,
    tournamentStartsAt: "07-07-2021",
    tournamentEndsAt: "08-07-2021",
  },
  {
    id: 2,
    title: "Drops & Wins",
    price: 6.0,
    bet: 0.2,
    tournamentStartsAt: "07-07-2021",
    tournamentEndsAt: "08-07-2021",
  },
  {
    id: 3,
    title: "Live Casino",
    price: 6.0,
    bet: 0.2,
    tournamentStartsAt: "07-07-2021",
    tournamentEndsAt: "08-07-2021",
  },
  {
    id: 4,
    title: "Monthly Race",
    price: 6.0,
    bet: 0.2,
    tournamentStartsAt: "07-07-2021",
    tournamentEndsAt: "08-07-2021",
  },
  {
    id: 5,
    title: "Top Provider",
    price: 6.0,
    bet: 0.2,
    tournamentStartsAt: "07-07-2021",
    tournamentEndsAt: "08-07-2021",
  },
  {
    id: 6,
    title: "Slot of the Week",
    price: 5.0,
    bet: 0.2,
    tournamentStartsAt: "07-07-2021",
    tournamentEndsAt: "08-07-2021",
  },
];

function GridTournaments() {
  return (
    <>
      <div className={styles["grid-layout"]}>
        {dummyData.map((item) => {
          return <TournamentItem data={item} key={item.id} />;
        })}
      </div>
      <Button value="View more" className={styles["custom-button"]} />
    </>
  );
}

export default GridTournaments;
