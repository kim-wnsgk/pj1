import styles from "./css/Home.module.css"
import { IoIosNotifications } from "react-icons/io"
import { RxDividerVertical } from "react-icons/rx"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"

import Summary from "../display/Summary"
import NodesDisplay from "../display/NodesDisplay.js"
import NodeDetail from "../display/NodeDetailDisplay"

import { useEffect, useState } from "react"
// import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux';
import { changeMenuAction } from '../store';

function Home() {
    const arr = useSelector(state => state)
    const dispatch = useDispatch();

    const changeMenu = (value) => {
        dispatch(changeMenuAction(value));
    }

    // const [scroll, setScroll] = useState(`100px`);
    const [menu, setMenu] = useState(["Overview", "Summary"]);
    const [text, setText] = useState("");
    const [isopen, setIsopen] = useState(false);

    const search = (txt) => {
        setText(txt.target.value);
    }

    // const StyledBanner = styled.div`
    //     margin: 0;
    //     border: 0;
    //     width:100%;
    //     height:${scroll};
    //     transition-duration: 1s;
    //     overflow:hidden;
    // `;

    // const handleOnWheel = (e) => {
    //     if (e.nativeEvent.wheelDelta > 0) {
    //         // scroll up event
    //         console.log('scroll up');
    //         //setScroll(`100px`);
    //     } else {
    //         // scroll down event 
    //         console.log('scroll down');
    //         //setScroll(`0px`)
    //     }
    // }

    return (
        <div>
            {/* <StyledBanner> */}
            <div className={styles.banner}>
                <div className={styles.title}>
                    <img alt="title" src="assets/img/logo.png" />
                </div>
                <div className={styles.topBar}>
                    <input className={styles.search}
                        type="text"
                        placeholder="search..."
                        value={text}
                        onChange={search} />
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
            {/* </StyledBanner> */}
            <div className={styles.viewer}>
                <AiOutlineMenu size="50"
                    onClick={() => { isopen ? setIsopen(false) : setIsopen(true) }}
                    style={{ cursor: 'pointer' }}
                />
                <div className={styles.menuName}>{arr.menu.map((str) => (" > " + `${str}`))}</div>
            </div>
            <div className={styles.container} /*onWheel={handleOnWheel}*/>
                {isopen ? (
                    <div className={styles.menuBar}>
                        <ul className={styles.menuList}>
                            <li>
                                <div>Overview</div>
                                <ul className={styles.smallMenu}>
                                    <li onClick={() => changeMenu(["Overview", "Summary"])}>Summary</li>
                                    <li onClick={() => changeMenu(["Overview", "Custom view"])}>Custom view</li>
                                </ul>
                            </li>
                            <li>Alerts</li>
                            <li>
                                <div onClick={() => changeMenu(["Nodes"])}>
                                    Nodes
                                </div>
                            </li>
                            <li>
                                <div>Resources</div>
                                <ul className={styles.smallMenu}>
                                    <li onClick={() => changeMenu(["Resources", "Pods"])}>Pods</li>
                                    <li onClick={() => changeMenu(["Resources", "Namespaces"])}>Namespaces</li>
                                    <li onClick={() => changeMenu(["Resources", "Volumes"])}>Volumes</li>
                                    <li onClick={() => changeMenu(["Resources", "Services"])}>Services</li>
                                    <li onClick={() => changeMenu(["Resources", "Secrets"])}>Secrets</li>
                                </ul>
                            </li>
                            <li>
                                <div>Controller</div>
                                <ul className={styles.smallMenu}>
                                    <li onClick={() => changeMenu(["Controller", "Replicaset"])}>Replicaset</li>
                                    <li onClick={() => changeMenu(["Controller", "Deployment"])}>Deployment</li>
                                    <li onClick={() => changeMenu(["Controller", "Ingress"])}>Ingress</li>
                                </ul>
                            </li>
                            <li>Help</li>
                        </ul>
                    </div>
                ) : null}

                <div className={styles.contents}>
                    {arr.menu.includes('Summary') ? <Summary /> : null}
                    {arr.menu.includes('Detail') ? <NodeDetail /> : arr.menu.includes('Nodes') ? <NodesDisplay /> : null}
                </div>
            </div>
        </div>
    );
}

export default Home;

