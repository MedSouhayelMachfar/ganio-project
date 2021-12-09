import React, { useContext } from "react";
import { ContextLanguage } from "./../context/ContextLanguageWrapper";

import Button from "../components/UI/Button";
import Header from "../components/Layout/Header";
import bgFAQ from "../assets/images/bgFAQ.svg";
import QuestionsList from "../components/Shared/FAQ/QuestionsList";
import Footer from "../components/Layout/Footer";

import styles from "./FAQ.module.css";
import useFetch from "../hooks/useFetch";

const apiURL = "http://127.0.0.1:3010/api/v1/faq";
function FAQ() {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);

    // 4 api calls to fetch questions by category
    const { isLoading: accountLoading, fetchedData: accountFetchedData } =
        useFetch(`${apiURL}?category=account&lang=${currentLanguage}`);

    const { isLoading: dwLoading, fetchedData: dwFetchedData } = useFetch(
        `${apiURL}?category=dw&lang=${currentLanguage}`
    );
    const { isLoading: gamesLoading, fetchedData: gamesFetchedData } = useFetch(
        `${apiURL}?category=games&lang=${currentLanguage}`
    );
    const { isLoading: securityLoading, fetchedData: securityFetchedData } =
        useFetch(`${apiURL}?category=security&lang=${currentLanguage}`);

    return (
        <div className={styles["faq-container"]}>
            <Header
                title={data.header.fAQTitle}
                pageLocation={data.header.fAQPageLocation}
                bgImg={bgFAQ}
            />
            <section className={styles["frequent-questions"]}>
                <div className={styles["heading"]}>
                    <h2>{data.faqHeaderContent.heading}</h2>
                    <p>{data.faqHeaderContent.paragraph}</p>
                </div>
                <div className={styles["faq-btn-container"]}>
                    <Button
                        value={data.faqHeaderContent.btn1}
                        className={styles["custom-btn"]}
                    />
                    <Button
                        value={data.faqHeaderContent.btn2}
                        className={styles["custom-btn"]}
                    />
                    <Button
                        value={data.faqHeaderContent.btn3}
                        className={styles["custom-btn"]}
                    />
                    <Button
                        value={data.faqHeaderContent.btn4}
                        className={styles["custom-btn"]}
                    />
                </div>
                {accountLoading ? (
                    "Loading..."
                ) : (
                    <QuestionsList
                        heading={data.faqHeaderContent.btn1}
                        data={accountFetchedData}
                    />
                )}
                {dwLoading ? (
                    "Loading..."
                ) : (
                    <QuestionsList
                        heading={data.faqHeaderContent.btn2}
                        data={dwFetchedData}
                    />
                )}
                {gamesLoading ? (
                    "Loading..."
                ) : (
                    <QuestionsList
                        heading={data.faqHeaderContent.btn2}
                        data={gamesFetchedData}
                    />
                )}
                {securityLoading ? (
                    "Loading..."
                ) : (
                    <QuestionsList
                        heading={data.faqHeaderContent.btn4}
                        data={securityFetchedData}
                    />
                )}
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
