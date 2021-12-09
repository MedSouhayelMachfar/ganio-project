import React, { useContext } from "react";

import { ContextLanguage } from "../context/ContextLanguageWrapper";

import Header from "../components/Layout/Header";
import Story from "../components/Shared/About/Story";
import LeadingBrand from "../components/Shared/About/LeadingBrand";
import Team from "../components/Shared/About/Team";
import Footer from "../components/Layout/Footer";
import {} from "./../components/Shared";
import bgGames from "./../assets/images/bgAbout.svg";
import styles from "./About.module.css";

function About() {
    // Getting data form our languages context
    let { data } = useContext(ContextLanguage);
    return (
        <main className={styles["About-page"]}>
            <Header
                title={data.header.aboutTitle}
                pageLocation={data.header.aboutPageLocation}
                bgImg={bgGames}
            />
            <Story
                dataContent={{
                    aboutStory: data.aboutStory,
                    leadingBrand: data.aboutLeadingBrand
                }}
            />
            <LeadingBrand dataContent={data.aboutLeadingBrand} />
            <Team dataContent={data.aboutTeamContent} />
            <Footer />
        </main>
    );
}

export default About;
