import styles from "./css/NodesDisplay.module.css"
import { MdExpandMore } from "react-icons/md"

import { useSelector, useDispatch } from 'react-redux';
import { changeMenuAction, changeNodeAction } from '../store';

import nodeDataJSON from '../data/nodeData.json'
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom"

function NodesDisplay() {

    const arr = useSelector(state => state)
    const dispatch = useDispatch();

    const changeMenu = (value) => {
        dispatch(changeMenuAction(value));
    }
    const changeNode = (value) => {
        dispatch(changeNodeAction(value));
    }

    const nodeReq = () => {
        fetch('/api/nodes')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
                setNodeData(JSON.stringify(myJson));
            });
    }

    const fetchNode = useCallback(() => {

    }, [])
    useEffect(() => {
        nodeReq();
    }, [])

    const [nodeData, setNodeData] = useState([]);
    return (
        <div className={styles.container}>
            {/* <button onClick={() => nodeReq()}>버튼</button> */}
            <div className={styles.row}>
                <div className={styles.name}>Name</div>
                <div className={styles.cpu}>CPU Usage(%)</div>
                <div className={styles.ram}>RAM Usage(%)</div>
                <div className={styles.disk}>Disk Usage(%)</div>
                <div className={styles.ip}>IP</div>
            </div>
            <hr />
            {nodeDataJSON ? (
                nodeDataJSON.map((data) => (
                    <div className={styles.row}>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.cpu}>{data.usageCpu}</div>
                        <div className={styles.ram}>{data.usageMemory}</div>
                        <div className={styles.disk}>NULL</div>
                        <div className={styles.ip}>{data.address[0].address}
                            <Link to={`/nodes/detail/${data.name}`}>
                                <MdExpandMore size="50px" style={{ float: 'right', cursor: 'pointer' }}
                                    onClick={() => {
                                        changeMenu(['Nodes', 'Detail']);
                                        changeNode({
                                            name: data.Name,
                                            usageCpu: data.usageCpu,
                                            UsageMemory: data.UsageMemory,
                                            Address: data.Address
                                        })
                                    }}

                                />
                            </Link></div>
                    </div>
                ))
            ) : null}
        </div>
    );
}

export default NodesDisplay;