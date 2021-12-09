import React from "react";

import styles from "./CounterElement.module.css";
function CounterElement(props) {
  const { imgUrl, imgAlt, value, title } = props;
  return (
    <div className={styles["counter-element"]}>
      <img src={imgUrl} alt={imgAlt} />
      <h4>{value}</h4>
      <h5>{title}</h5>
    </div>
  );
}

export default CounterElement;
