import styles from "./css/Home.module.css"
import { IoIosNotifications } from "react-icons/io"
import { RxDividerVertical } from "react-icons/rx"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"

import { Link } from "react-router-dom"

import Summary from "../display/Summary"
import Nodes from "../display/Nodes.js"

import { useEffect, useState } from "react"
import styled from "styled-components";



function Home() {
    const [scroll, setScroll] = useState(`100px`);
    const [menu, setMenu] = useState(["Overview", "Summary"])

    const StyledBanner = styled.div`
        margin: 0;
        border: 0;
        width:100%;
        height:${scroll};
        transition-duration: 1s;
        overflow:hidden;
    `;

    const handleOnWheel = (e) => {
        if (e.nativeEvent.wheelDelta > 0) {
            // scroll up event
            console.log('scroll up');
            //setScroll(`100px`);
        } else {
            // scroll down event 
            console.log('scroll down');
            //setScroll(`0px`)
        }
    }

    return (
        <div>
            <StyledBanner>
                <div className={styles.banner}>
                    <div className={styles.title}>KubeDashboard</div>
                    <div className={styles.topBar}>
                        <input className={styles.search} type="text" placeholder="Search" />
                        <RxDividerVertical size="70" />
                        <div className={styles.alert}>
                            <IoIosNotifications size="70" />

                        </div>
                        <RxDividerVertical size="70" />
                        <div className={styles.user}>
                            <FaRegUser size="50" />
                        </div>
                    </div>
                </div>
            </StyledBanner>
            <div className={styles.viewer}>
                <label className={styles.menuButton} for="menuBtn">
                    <AiOutlineMenu size="50" />
                </label>
                <div className={styles.menuName}>{menu.map((arr) => (">" + `${arr}`))}</div>
            </div>
            <div className={styles.container} onWheel={handleOnWheel}>
                <input id="menuBtn" type="checkbox" className={styles.menuBtn} />
                <div className={styles.menuBar}>
                    <ul className={styles.menuList}>
                        <li>
                            <div>Overview</div>
                            <ul className={styles.smallMenu}>
                                <li onClick={() => setMenu(["Overview", "Summary"])}>Summary</li>
                                <li onClick={() => setMenu(["Overview", "Custom view"])}>Custom view</li>
                            </ul>
                        </li>
                        <li>Alerts</li>
                        <li>
                            <div onClick={() => setMenu(["Nodes"])}>
                                Nodes
                            </div>
                        </li>
                        <li>
                            <div>Resources</div>
                            <ul className={styles.smallMenu}>
                                <li onClick={() => setMenu(["Resources", "Pods"])}>Pods</li>
                                <li onClick={() => setMenu(["Resources", "Namespaces"])}>Namespaces</li>
                                <li onClick={() => setMenu(["Resources", "Volumes"])}>Volumes</li>
                                <li onClick={() => setMenu(["Resources", "Services"])}>Services</li>
                                <li onClick={() => setMenu(["Resources", "Secrets"])}>Secrets</li>
                            </ul>
                        </li>
                        <li>
                            <div>Controller</div>
                            <ul className={styles.smallMenu}>
                                <li onClick={() => setMenu(["Controller", "Replicaset"])}>Replicaset</li>
                                <li onClick={() => setMenu(["Controller", "Deployment"])}>Deployment</li>
                                <li onClick={() => setMenu(["Controller", "Ingress"])}>Ingress</li>
                            </ul>
                        </li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className={styles.contents}>
                    {menu.includes('Summary') ? <Summary /> : console.log(menu)}
                    {menu.includes('Nodes') ? <Nodes /> : console.log(menu)}
                </div>
            </div>

        </div>
    );
}

export default Home;

