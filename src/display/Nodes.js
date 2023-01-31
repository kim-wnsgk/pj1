import styles from "./css/Nodes.module.css"
import { MdExpandMore } from "react-icons/md"

import { useSelector, useDispatch } from 'react-redux';
import { changeMenuAction } from '../store';

import data from '../data/data.json'

function Nodes() {

    const arr = useSelector(state => state)
    const dispatch = useDispatch();

    const changeMenu = (value) => {
        dispatch(changeMenuAction(value));
    }

    console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.name}>Name</div>
                <div className={styles.cpu}>CPU Usage(%)</div>
                <div className={styles.ram}>RAM Usage(%)</div>
                <div className={styles.disk}>Disk Usage(%)</div>
                <div className={styles.ip}>IP</div>
            </div>
            <hr />
            {data.map((data) =>
                <div className={styles.row}>
                    <div className={styles.name}>{data.Name}</div>
                    <div className={styles.cpu}>{data.usageCpu}</div>
                    <div className={styles.ram}>{data.UsageMemory}</div>
                    <div className={styles.disk}>NULL</div>
                    <div className={styles.ip}>{data.Address}<MdExpandMore size="50px" style={{ float: 'right', cursor:'pointer' } } onClick={() => changeMenu(['Nodes', 'Detail'])} /></div>
                </div>
            )}
        </div>
    );
}

export default Nodes;