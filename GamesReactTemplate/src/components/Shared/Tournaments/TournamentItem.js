import React from "react";
import { Link } from "react-router-dom";

import priceIcon from "./../../../assets/images/priceIconTr.svg";
import placeholderTr from "./../../../assets/images/placeholderTr.svg";
import Button from "./../../UI/Button";
import styles from "./TournamentItem.module.css";
function TournamentItem(props) {
  const { data } = props;
  return (
    <div className={styles["tournament-item"]}>
      <img src={placeholderTr} alt="placeholder img" />
      <div className={styles["tournament-item-content"]}>
        <h1>{data.title}</h1>
        <div className={styles["tournament-price-container"]}>
          <img src={priceIcon} alt="price icon" />
          <span>&euro;{data.price}</span>
        </div>
        <p>
          MIN, BET <span>&euro;{data.bet}</span>
        </p>
        <Link to={`/tournaments/${data.id}`}>
          <Button
            value="VIEW TOURNAMENT"
            className={styles["tournament-btn"]}
          />
        </Link>
        <p>
          WILL END ON: <span>{data.tournamentEndsAt}</span>
        </p>
      </div>
    </div>
  );
}

export default TournamentItem;
