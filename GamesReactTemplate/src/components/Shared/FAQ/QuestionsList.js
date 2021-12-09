import React, { useContext } from "react";
import { ContextLanguage } from "../../../context/ContextLanguageWrapper";

import QuestionItem from "./QuestionItem";
import styles from "./QuestionsList.module.css";

function QuestionsList(props) {
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    const { data, heading } = props;
    return (
        <div className={styles["question-list-container"]}>
            <h4>{heading}</h4>
            <div className={styles["items-container"]}>
                {data.map((elem) => {
                    return (
                        <QuestionItem
                            data={elem}
                            key={elem.id}
                            rtlClass={rtlClass}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionsList;
