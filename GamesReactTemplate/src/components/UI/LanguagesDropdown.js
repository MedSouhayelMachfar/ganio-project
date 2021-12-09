import React, { useRef, useContext } from "react";
import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

import downArrow from "./../../assets/icons/down_arrow.svg";
/* Custom hook */
import useClickOutside from "./../../hooks/useClickOutside";

import styles from "./LanguagesDropdown.module.css";
function LanguagesDropdown() {
    const [isOpenLanguagesDropdown, setIsOpenLanguagesDropdown] =
        React.useState(false);
    const wrapperRef = useRef(null);

    // using Context to set the current language
    const contextLanguages = useContext(ContextLanguage);

    const handleItemClick = (language) => {
        setIsOpenLanguagesDropdown(!isOpenLanguagesDropdown);
        contextLanguages.setCurrentLanguage(language);
        // Set the dataset on the body element to the current language
        document.getElementsByTagName("body")[0].dataset.lang = language;
    };

    useClickOutside(wrapperRef, setIsOpenLanguagesDropdown);
    return (
        <div
            className={styles["navbar-custom-language-dropdown"]}
            ref={wrapperRef}
        >
            <div
                className={styles["navbar-custom-language-dropdown-header"]}
                onClick={() =>
                    setIsOpenLanguagesDropdown(!isOpenLanguagesDropdown)
                }
            >
                <span>{contextLanguages.currentLanguage}</span>
                <img
                    src={downArrow}
                    alt="down arrow for pages dropdown"
                    className={styles["animated-arrow"]}
                />
            </div>

            <ul
                className={`${styles["navbar-custom-language-list"]} ${
                    isOpenLanguagesDropdown &&
                    styles["navbar-custom-language-list-toggle"]
                }`}
            >
                <li onClick={() => handleItemClick("EN")}>EN</li>
                <li
                    onClick={() => {
                        handleItemClick("FR");
                    }}
                >
                    FR
                </li>
                <li
                    onClick={() => {
                        handleItemClick("TN");
                    }}
                >
                    TN
                </li>
            </ul>
        </div>
    );
}

export default LanguagesDropdown;
