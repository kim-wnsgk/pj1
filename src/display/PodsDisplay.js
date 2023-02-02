import styles from "./css/PodsDisplay.module.css"
import { MdExpandMore } from "react-icons/md"

import podsDataJSON from '../data/podsData.json'
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom"

function PodsDisplay() {
    return (
        <div className={styles.container}>
            {/* <button onClick={() => nodeReq()}>버튼</button> */}
            <div className={styles.row}>
                <div className={styles.name}>Name</div>
                <div className={styles.cpu}>CPU Usage(%)</div>
                <div className={styles.ram}>RAM Usage(%)</div>
                <div className={styles.status}>Status</div>
                <div className={styles.ip}>IP</div>
            </div>
            <hr />
            {podsDataJSON ? (
                podsDataJSON.map((data) => (
                    <div className={styles.row}>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.cpu}>{data.usageCpu}</div>
                        <div className={styles.ram}>{data.usageMemory}</div>
                        <div className={styles.status}>{data.status}</div>
                        <div className={styles.ip}>{data.podIP}
                            <Link to={`/resources/pods/${data.name}`}>
                                <MdExpandMore size="50px" style={{ float: 'right', cursor: 'pointer' }} />
                            </Link></div>
                    </div>
                ))
            ) : null}
        </div>
    );
}

export default PodsDisplay;