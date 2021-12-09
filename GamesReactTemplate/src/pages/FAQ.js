import React, { useContext, useState, useEffect } from "react";
import { ContextLanguage } from "./../context/ContextLanguageWrapper";
import axios from "axios";

import Button from "../components/UI/Button";
import Header from "../components/Layout/Header";
import bgFAQ from "../assets/images/bgFAQ.svg";
import QuestionsList from "../components/Shared/FAQ/QuestionsList";
import Footer from "../components/Layout/Footer";

import styles from "./FAQ.module.css";

function FAQ() {
    // Getting data form our languages context
    let { data } = useContext(ContextLanguage);
    // State for questions
    const [accountQA, setAccountQA] = useState([]);
    const [dwQA, setDwQA] = useState([]);
    const [gamesQA, setGamesQA] = useState([]);
    const [securityQA, setSecurityQA] = useState([]);
    const apiURL = "http://127.0.0.1:3010/api/v1/faq";

    useEffect(() => {
        async function fetchQuestions() {
            const result1 = await axios.get(`${apiURL}?category=account`);
            const result2 = await axios.get(`${apiURL}?category=dw`);
            const result3 = await axios.get(`${apiURL}?category=games`);
            const result4 = await axios.get(`${apiURL}?category=security`);
            setAccountQA(result1.data.data.questions);
            setDwQA(result2.data.data.questions);
            setGamesQA(result3.data.data.questions);
            setSecurityQA(result4.data.data.questions);
            console.log(
                "Data received from server :",
                result1.data.data.questions,
                result2.data.data.questions,
                result3.data.data.questions,
                result4.data.data.questions
            );
        }
        fetchQuestions();
    }, []);
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
                <QuestionsList
                    heading={data.faqHeaderContent.btn1}
                    data={accountQA}
                />
                <QuestionsList
                    heading={data.faqHeaderContent.btn2}
                    data={dwQA}
                />
                <QuestionsList
                    heading={data.faqHeaderContent.btn3}
                    data={gamesQA}
                />
                <QuestionsList
                    heading={data.faqHeaderContent.btn4}
                    data={securityQA}
                />
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
