import React from "react";

import legalness from "./../../../assets/icons/legalness.svg";
import safety from "./../../../assets/icons/safety.svg";
import profitability from "./../../../assets/icons/profitability.svg";
import styles from "./Features.module.css";
function Features() {
  return (
    <div className={styles["features"]}>
      <div className={styles["features-container"]}>
        <div className={styles["features__box"]}>
          <img src={legalness} alt="legalness icon" />
          <div>
            <h4>Legalness</h4>
            <p>
              Only certified games from the best manufacturers are waiting for
              you!
            </p>
          </div>
        </div>
        <div className={styles["features__box"]}>
          <img src={safety} alt="safety icon" />
          <div>
            <h4>Safety</h4>
            <p>
              Confirmed safety and absolutely fair game. You are always
              protected!
            </p>
          </div>
        </div>
        <div className={styles["features__box"]}>
          <img src={profitability} alt="profitability icon" />
          <div>
            <h4>Profitability</h4>
            <p>
              Take advantage of our unique promotions! Take part in the
              giveaways!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
