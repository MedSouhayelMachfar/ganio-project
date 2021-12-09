import React, { useRef, useContext } from "react";
import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

import { NavLink } from "react-router-dom";

import GlobeIcon from "./../../assets/icons/GlobeIcon.svg";
import downArrow from "./../../assets/icons/down_arrow.svg";
/* Custom hook */
import useClickOutside from "./../../hooks/useClickOutside";

import styles from "./PagesDropdown.module.css";

function PagesDropdown() {
    const [isOpenDropdown, setIsOpenDropDown] = React.useState(false);
    const [isPageSelected, setIsPageSelected] = React.useState(false);
    const listRef = useRef(null);
    const wrapperRef = useRef(null);
    // Using the languages context
    let { currentLanguage, data } = useContext(ContextLanguage);
    data = data.navBar;
    /* Add the active class to the page span if we select a page */
    React.useEffect(() => {
        Array.from(listRef.current.children).forEach((elem) => {
            if (elem.children[0].classList.value.indexOf("active") !== -1) {
                setIsPageSelected(true);
            }
        });
    }, [isOpenDropdown]);

    useClickOutside(wrapperRef, setIsOpenDropDown);
    return (
        <div className={styles["navbar-custom-dropdown"]} ref={wrapperRef}>
            <div
                className={styles["navbar-custom-dropdown-header"]}
                onClick={() => setIsOpenDropDown(!isOpenDropdown)}
            >
                <img src={GlobeIcon} alt="earth icon" />
                <span className={isPageSelected ? styles.active : null}>
                    {currentLanguage !== "TN" ? "Pages" : "الصفحات"}
                </span>
                <img src={downArrow} alt="down arrow for pages dropdown" />
            </div>

            <ul
                className={`${styles["navbar-custom-list"]} ${
                    isOpenDropdown && styles["navbar-custom-list-toggle"]
                }`}
                ref={listRef}
            >
                <li onClick={() => setIsOpenDropDown(!isOpenDropdown)}>
                    <NavLink to="/about" activeClassName={styles["active"]}>
                        {data.link4}
                    </NavLink>
                </li>
                <li onClick={() => setIsOpenDropDown(!isOpenDropdown)}>
                    <NavLink to="/faq" activeClassName={styles["active"]}>
                        {data.link5}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PagesDropdown;
