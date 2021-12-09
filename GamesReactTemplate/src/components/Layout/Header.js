import React, { useContext } from "react";
import { ContextLanguage } from "../../context/ContextLanguageWrapper";

import { NavbarMenu } from "./../Shared";
import styles from "./Header.module.css";
function Header(props) {
    const { title, pageLocation, bgImg } = props;

    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;
    return (
        <header
            className={styles["header-shared-menu"]}
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <NavbarMenu />
            <div
                className={`${styles["header-shared-menu-content"]} ${
                    rtlClass && styles[rtlClass]
                }`}
            >
                <h2>{title}</h2>
                <p>{pageLocation}</p>
            </div>
        </header>
    );
}

export default Header;
