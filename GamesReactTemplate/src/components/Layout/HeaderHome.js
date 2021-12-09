import React from "react";

import { NavbarMenu } from "./../Shared";
import Button from "../UI/Button";
import styles from "./HeaderHome.module.css";

function HeaderHome(props) {
    let { dataContent } = props;

    return (
        <header className={styles["header-home"]}>
            <NavbarMenu />
            <div className={styles.banner}>
                <div className={styles["showcase-content"]}>
                    <h1>{dataContent.headingPart1}</h1>
                    <h1 style={{ color: "var(--clr-primary-cyan)" }}>
                        {dataContent.headingPart2}
                    </h1>
                    <p className="extra-large-text">{dataContent.paragraph}</p>
                    <Button value={dataContent.btn} />
                </div>
            </div>
        </header>
    );
}

export default HeaderHome;
