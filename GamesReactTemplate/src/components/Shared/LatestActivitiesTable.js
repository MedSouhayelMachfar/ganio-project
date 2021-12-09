import React from "react";

import styles from "./LatestActivitiesTable.module.css";

function LatestActivitiesTableLine({ data }) {
    const { game, player, betId, payout, profit, gameIcon, profitIcon } = data;
    return (
        <React.Fragment>
            <tr className={styles["latest-activities-table-tr-body"]}>
                <th>
                    <img src={gameIcon} alt="randomIcon" />
                    {game}
                </th>
                <th>{player}</th>
                <th>{betId}</th>
                <th>{payout}</th>
                <th>
                    <img src={profitIcon} alt="randomIcon" />
                    {profit}
                </th>
            </tr>
        </React.Fragment>
    );
}

function LatestActivitiesTable(props) {
    const { dataTable } = props;
    return (
        <div className={styles["latest-activities-table"]}>
            <table>
                <thead>
                    <tr>
                        <th>GAME</th>
                        <th>PLAYER</th>
                        <th>BET ID</th>
                        <th>PAYOUT</th>
                        <th>PROFIT</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable?.map((record) => {
                        return (
                            <LatestActivitiesTableLine
                                data={record}
                                key={record.betId}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LatestActivitiesTable;
