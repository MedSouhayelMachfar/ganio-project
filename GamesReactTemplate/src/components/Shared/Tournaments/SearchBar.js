import React, { useContext } from "react";
import { ContextLanguage } from "../../../context/ContextLanguageWrapper";
import SearchIcon from "./../../../assets/icons/SearchIcon.svg";
import Button from "../../UI/Button";
import styles from "./SearchBar.module.css";
function SearchBar() {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    let dataContent = data.tournamentsSearchBarBtns;
    return (
        <div
            className={`${styles["search-bar"]} ${
                rtlClass && styles[rtlClass]
            }`}
        >
            <div className={styles["input-container"]}>
                <img src={SearchIcon} alt="search" />
                <input type="text" placeholder={dataContent.inputPlaceholder} />
            </div>
            <div
                className={`${styles["btn-container"]} ${
                    rtlClass && styles[rtlClass]
                }`}
            >
                <Button
                    value={dataContent.btnAll}
                    className={styles["icon-fix"]}
                />
                <Button
                    value={dataContent.btnToday}
                    className={styles["icon-fix"]}
                />
                <Button
                    value={dataContent.btnWeek}
                    className={styles["icon-fix"]}
                />
            </div>
        </div>
    );
}

export default SearchBar;
