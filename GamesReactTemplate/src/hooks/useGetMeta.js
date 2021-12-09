import { useLocation } from "react-router";

import meta from "./../data/metaOG.config";

function useGetMeta() {
    let location = useLocation().pathname.substring(1);
    let id;
    location = location === "" ? "home" : location;
    if (location.includes("tournaments/")) {
        id = location.split("/")[1];
        id = isNaN(id) ? null : id;
    }

    switch (location) {
        case "home":
            return meta.homeMeta;
        case "about":
            return meta.aboutMeta;
        case "tournaments":
            return meta.tournamentsMeta;
        case `tournaments/${id}`:
            return meta.tournamentsMeta;
        case "games":
            return meta.gamesMeta;
        case "faq":
            return meta.faqMeta;
        default:
            return meta.homeMeta;
    }
}

export default useGetMeta;
