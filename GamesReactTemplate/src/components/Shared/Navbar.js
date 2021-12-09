import React, { useContext } from "react";
import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

import { NavLink } from "react-router-dom";
import Logo from "./../UI/Logo";
import PagesDropdown from "../UI/PagesDropdown";
import LanguagesDropdown from "../UI/LanguagesDropdown";

import styles from "./Navbar.module.css";

function Navbar(props) {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);
    data = data.navBar;

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;
    return (
        <nav
            className={`${styles.nav} ${props.className} ${
                rtlClass && styles.rtlClass
            }`}
        >
            <Logo className={styles["logo-display"]} />
            <div
                className={`${styles["right-side-nav-container"]}  ${
                    rtlClass && styles.rtlClass
                }`}
            >
                <ul>
                    <li>
                        <NavLink
                            exact={true}
                            to="/"
                            activeClassName={styles["active"]}
                        >
                            {data.link1}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/games" activeClassName={styles["active"]}>
                            {data.link2}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tournaments"
                            activeClassName={styles["active"]}
                        >
                            {data.link3}
                        </NavLink>
                    </li>
                    <div
                        className={`${styles["dropdown-container__nav"]}  ${
                            rtlClass && styles.rtlClass
                        }`}
                    >
                        <li className={styles["d1"]}>
                            <PagesDropdown />
                        </li>
                        <li className={styles["d2"]}>
                            <LanguagesDropdown />
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
