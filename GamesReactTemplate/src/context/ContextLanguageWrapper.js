import React, { createContext, useState, useEffect } from "react";

import EN from "./../data/En";
import FR from "./../data/Fr";
import TN from "./../data/Tn";

export const ContextLanguage = createContext();

const getCurrentLanguageData = (currentLanguage) => {
    switch (currentLanguage) {
        case "EN":
            return EN;
        case "FR":
            return FR;
        case "TN":
            return TN;
        default:
            return EN;
    }
};

const getStorageLanguage = () => {
    let lang = "EN";
    if (localStorage.getItem("lang")) {
        lang = localStorage.getItem("lang");
    }
    return lang;
};

function ContextLanguageWrapper({ children }) {
    const [currentLanguage, setCurrentLanguage] = useState(
        getStorageLanguage()
    );
    const data = getCurrentLanguageData(currentLanguage);

    useEffect(() => {
        localStorage.setItem("lang", currentLanguage);
    }, [currentLanguage]);

    return (
        <ContextLanguage.Provider
            value={{ data, currentLanguage, setCurrentLanguage }}
        >
            {children}
        </ContextLanguage.Provider>
    );
}
export default ContextLanguageWrapper;
