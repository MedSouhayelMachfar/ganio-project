import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { ContextLanguage } from "../context/ContextLanguageWrapper";

const useFetch = (url) => {
    const { currentLanguage } = useContext(ContextLanguage);

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        if (!url) {
            setIsLoading(false);
            return;
        }
        const fetchData = async () => {
            const response = await axios.get(url);
            const data = response.data.data.questions;
            setIsLoading(false);
            setFetchedData(data);
        };

        fetchData();
    }, [url, currentLanguage]);

    return { isLoading, fetchedData };
};

export default useFetch;
