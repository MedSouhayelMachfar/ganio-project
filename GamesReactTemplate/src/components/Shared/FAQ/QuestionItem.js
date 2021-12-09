import React from "react";

import rightArrow from "./../../../assets/icons/Vector.svg";
import styles from "./QuestionItem.module.css";

function QuestionItem(props) {
    const [isOpenQuestion, setIsOpenQuestion] = React.useState(false);
    const { data, rtlClass } = props;
    return (
        <div
            className={`${styles["question-item"]}
        ${isOpenQuestion ? styles["fix-border"] : undefined}
        ${rtlClass && styles["rtlClass"]}`}
        >
            <div>
                <h6>{data.question}</h6>
                <img
                    className={
                        isOpenQuestion
                            ? styles["question-item-animate-arrow"]
                            : undefined
                    }
                    src={rightArrow}
                    alt="arrow"
                    onClick={() => setIsOpenQuestion(!isOpenQuestion)}
                />
            </div>
            <p className={isOpenQuestion ? styles["showAnswer"] : null}>
                {data.answer ? data.answer : "No answer found!"}
            </p>
        </div>
    );
}

export default QuestionItem;
