import React, { useContext } from "react";
import { ContextLanguage } from "../../context/ContextLanguageWrapper";

import plusIcon from "./../../assets/icons/plusIcon.svg";
import minusIcon from "./../../assets/icons/minusIcon.svg";
import styles from "./../Shared/QuestionItems.module.css";

function Item(props) {
    const [isOpenQuestion, setIsOpenQuestion] = React.useState(false);
    const { data, rtlClass } = props;
    return (
        <div
            className={`${styles["question-item"]} ${
                rtlClass && styles["rtlClass"]
            }`}
        >
            <div>
                <h6>{data.question}</h6>
                {!isOpenQuestion && (
                    <img
                        src={plusIcon}
                        alt="plus icon"
                        onClick={() => setIsOpenQuestion(true)}
                    />
                )}
                {isOpenQuestion && (
                    <img
                        src={minusIcon}
                        alt="minus icon"
                        onClick={() => setIsOpenQuestion(false)}
                    />
                )}
            </div>
            <p className={isOpenQuestion ? styles["showAnswer"] : null}>
                {data.answer ? data.answer : "No answer found!"}
            </p>
        </div>
    );
}

function QuestionItems(props) {
    // Getting data form our languages context
    let { currentLanguage } = useContext(ContextLanguage);

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    const { data } = props;
    return (
        <React.Fragment>
            {data.map((question) => {
                return (
                    <Item
                        data={question}
                        key={question.id}
                        rtlClass={rtlClass}
                    />
                );
            })}
        </React.Fragment>
    );
}

export default QuestionItems;
