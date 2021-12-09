import React, { useContext } from "react";
import { ContextLanguage } from "../../context/ContextLanguageWrapper";

import placeholder from "./../../assets/images/placeholder.svg";
import bgHome from "./../../assets/images/bgHome.svg";
import styles from "./Carousel.module.css";
function Carousel() {
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    return (
        <div
            className={`${styles["feature-carousel"]} ${
                rtlClass && styles[rtlClass]
            }`}
        >
            <img src={bgHome} alt="random img1" />
            <img src={placeholder} alt="random img2" />
            <img src={placeholder} alt="random img3" />
            <img src={placeholder} alt="random img4" />
            <img src={placeholder} alt="random img5" />
            <img src={placeholder} alt="random img6" />
            <img src={placeholder} alt="random img7" />
        </div>
    );
}

export default Carousel;
