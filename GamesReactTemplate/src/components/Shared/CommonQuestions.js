import React, { useContext } from "react";

import QuestionItems from "./../Shared/QuestionItems";
import FAQIllustration from "./../../assets/images/FAQIllustration.svg";
import styles from "./CommonQuestions.module.css";
import useFetch from "../../hooks/useFetch";
import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

const apiURL = "http://127.0.0.1:3010/api/v1/faq";

function CommonQuestions(props) {
    const { dataContent } = props;

    const { currentLanguage } = useContext(ContextLanguage);

    const { isLoading, fetchedData } = useFetch(
        `${apiURL}?category=faq&lang=${currentLanguage}`
    );

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
                    {isLoading ? (
                        "Loading..."
                    ) : (
                        <QuestionItems data={fetchedData} />
                    )}
                </article>
            </section>
        </div>
    );
}

export default CommonQuestions;
