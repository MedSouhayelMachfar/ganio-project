import React from "react";

import gridPlaceholder from "./../../assets/images/gridPlaceholder.svg";
import styles from "./GridCards.module.css";
function GridCards(props) {
  return (
    <div className={`${styles.gridCards} ${props.className}`}>
      <img src={gridPlaceholder} alt="grid image1" />
      <img src={gridPlaceholder} alt="grid image2" />
      <img src={gridPlaceholder} alt="grid image3" />
      <img src={gridPlaceholder} alt="grid image4" />
      <img src={gridPlaceholder} alt="grid image5" />
      <img src={gridPlaceholder} alt="grid image6" />
      <img src={gridPlaceholder} alt="grid image6" />
      <img src={gridPlaceholder} alt="grid image6" />
    </div>
  );
}

export default GridCards;
