import React, { useContext } from "react";
import { ContextLanguage } from "../../../context/ContextLanguageWrapper";

import listViewBtn from "./../../../assets/icons/listViewBtn.svg";
import gridViewBtn from "./../../../assets/icons/gridViewBtn.svg";
import FilterDropdown from "../../UI/FilterDropdown";
import styles from "./FilterBar.module.css";
function FilterBar() {
    // Getting data form our languages context
    let { data } = useContext(ContextLanguage);

    return (
        <div className={styles["filterbar-container"]}>
            <div className={styles["filterbar-dropdown"]}>
                <FilterDropdown
                    heading={data.tournamentsFilterContent.filter1}
                    options={["upcoming1", "upcoming2", "upcoming3"]}
                />
                <FilterDropdown
                    heading={data.tournamentsFilterContent.filter2}
                    options={["team1", "team2", "team3"]}
                />
                <FilterDropdown
                    heading={data.tournamentsFilterContent.filter3}
                    options={["fee1", "fee2", "fee3"]}
                />
            </div>
            <div className={styles["filter-btn-container"]}>
                <img src={gridViewBtn} alt="grid icon" />
                <img src={listViewBtn} alt="list icon" />
            </div>
        </div>
    );
}

export default FilterBar;
