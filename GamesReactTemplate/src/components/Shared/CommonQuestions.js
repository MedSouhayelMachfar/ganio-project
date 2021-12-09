import React, { useState, useEffect } from "react";
import axios from "axios";

import QuestionItems from "./../Shared/QuestionItems";
import FAQIllustration from "./../../assets/images/FAQIllustration.svg";
import styles from "./CommonQuestions.module.css";

function CommonQuestions(props) {
    const { dataContent } = props;

    // State for questions
    const [questions, setQuestions] = useState([]);
    const apiURL = "http://127.0.0.1:3010/api/v1/faq";

    useEffect(() => {
        async function fetchQuestions() {
            const result = await axios.get(apiURL);
            setQuestions(result.data.data.questions);
            console.log(
                "Data received from server :",
                result.data.data.questions
            );
        }
        fetchQuestions();
    }, []);

    return (
        <div className={styles["common-question"]}>
            <header>
                <h2>{dataContent.heading}</h2>
                <p>{dataContent.paragraph}</p>
            </header>
            <section>
                <img
                    src={FAQIllustration}
                    alt="common questions section illustration"
                />
                <article>
                    <QuestionItems data={questions} />
                </article>
            </section>
        </div>
    );
}

export default CommonQuestions;
