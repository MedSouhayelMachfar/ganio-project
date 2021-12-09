import React from "react";

import priceIcon from "./../../../assets/images/priceIconTr.svg";
import styles from "./Details.module.css";
function Details(props) {
  const { data, className } = props;
  return (
    <div className={`${styles["tournament-details"]} ${className}`}>
      <div className={styles["tournament-details__header"]}>
        <h3>Tournament</h3>
        <h2>{data.title}</h2>
      </div>
      <div className={styles["tournament-details__prize"]}>
        <h4>Prize pool</h4>
        <div>
          <img src={priceIcon} alt="price icon" />
          <span>&euro;{data.price}</span>
        </div>
      </div>
      <div className={styles["tournament-details__period"]}>
        <div>
          <h4>Minimum bet</h4>
          <p>&euro;{data.bet}</p>
        </div>
        <div>
          <h4>Period from</h4>
          <p>
            {data.tournamentStartsAt} <span>TO</span> {data.tournamentEndsAt}
          </p>
        </div>
        <div>
          <h4>Type</h4>
          <p>{data.type}</p>
        </div>
      </div>
      <div className={styles["tournament-details__countdown"]}>
        <div>
          <p>05</p>
          <span>DD</span>
        </div>
        <span>:</span>
        <div>
          <p>03</p>
          <span>HH</span>
        </div>
        <span>:</span>
        <div>
          <p>31</p>
          <span>MM</span>
        </div>
        <span>:</span>
        <div>
          <p>33</p>
          <span>SS</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
