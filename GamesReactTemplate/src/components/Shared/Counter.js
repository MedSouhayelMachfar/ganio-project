import React from "react";

import supportimg from "./../../assets/images/supportimg.svg";
import secureimg from "./../../assets/images/secureimg.svg";
import totalpaid from "./../../assets/images/totalpaid.svg";
import jackpot from "./../../assets/images/jackpot.svg";
import CounterElement from "../UI/CounterElement";
import styles from "./Counter.module.css";
function Counter(props) {
    const { dataContent } = props;
    return (
        <div className={styles["counter-container"]}>
            <CounterElement
                imgUrl={totalpaid}
                imgAlt="cool total paid img"
                value="$ 81237619"
                title={dataContent.titleCard1}
            />
            <CounterElement
                imgUrl={jackpot}
                imgAlt="cool jackpot img"
                value="$ 133 501"
                title={dataContent.titleCard2}
            />
            <CounterElement
                imgUrl={secureimg}
                imgAlt="cool secure img"
                value="100%"
                title={dataContent.titleCard3}
            />
            <CounterElement
                imgUrl={supportimg}
                imgAlt="cool support img"
                value="24/7"
                title={dataContent.titleCard4}
            />
        </div>
    );
}

export default Counter;
