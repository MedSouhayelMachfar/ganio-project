import React, { useContext } from "react";
import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

import { Navbar, SocialMediaBar } from "./../Shared";
import Button from "./../UI/Button";
import newsLetterImg from "./../../assets/images/newsLetterImg.svg";
import styles from "./Footer.module.css";

function NewsLetter(props) {
    const { dataContent } = props;
    return (
        <div
            className={styles["news-letter-container"]}
            style={{ backgroundImage: `url(${newsLetterImg})` }}
        >
            <h3>{dataContent.newsLetterHeading}</h3>
            <p>{dataContent.newsLetterParagraph}</p>
            <div className={styles["news-letter-custom-input-container"]}>
                <input type="text" placeholder="Enter your email address" />
                <Button value={dataContent.newsLetterBtn} type="submit" />
            </div>
        </div>
    );
}
function Footer() {
    // Getting data form our languages context
    let { data } = useContext(ContextLanguage);
    let dataContent = data.footerContent;

    return (
        <footer className={styles["global-footer"]}>
            <NewsLetter dataContent={dataContent} />
            <div className={styles["global-footer-content"]}>
                <div className={styles["global-footer-nav"]}>
                    <Navbar />
                    <SocialMediaBar />
                </div>
                <p>
                    {dataContent.footerParagraphPart1}
                    <span>{dataContent.footerParagraphPart2}</span>
                    {dataContent.footerParagraphPart3}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
