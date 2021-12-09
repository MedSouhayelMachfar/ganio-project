import React, { useContext } from "react";
import { ContextLanguage } from "../../../context/ContextLanguageWrapper";
import gamesShocIcon from "./../../../assets/icons/gamesShocIcon.svg";
import gamesStarIcon from "./../../../assets/icons/gamesStarIcon.svg";
import gamesTrophyIcon from "./../../../assets/icons/gamesTrophyIcon.svg";
import SearchIcon from "./../../../assets/icons/SearchIcon.svg";
import Button from "../../UI/Button";
import styles from "./SearchBar.module.css";

function SearchBar() {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    let dataContent = data.gamesSearchBarBtns;
    return (
        <div className={`${styles["search-bar"]} ${styles[rtlClass]}`}>
            <div className={styles["input-container"]}>
                <img src={SearchIcon} alt="search" />
                <input type="text" placeholder={dataContent.inputPlaceholder} />
            </div>
            <div className={styles["btn-container"]}>
                <Button
                    value={dataContent.btnFeatured}
                    icon={gamesStarIcon}
                    iconLeft={true}
                    className={styles["icon-fix"]}
                />
                <Button
                    value={dataContent.btnInstant}
                    icon={gamesShocIcon}
                    iconLeft={true}
                    className={styles["icon-fix"]}
                />
                <Button
                    value={dataContent.btnTournament}
                    icon={gamesTrophyIcon}
                    iconLeft={true}
                    className={styles["icon-fix"]}
                />
            </div>
        </div>
    );
}

export default SearchBar;
