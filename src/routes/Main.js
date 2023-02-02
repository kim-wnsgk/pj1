import styles from "./css/Banner.module.css"
import { IoIosNotifications } from "react-icons/io"
import { RxDividerVertical } from "react-icons/rx"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"


import { useEffect, useState } from "react"
// import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux';
import { changeMenuAction } from '../store';
import { Link } from "react-router-dom"

function Main() {
    const arr = useSelector(state => state)
    const dispatch = useDispatch();

    const changeMenu = (value) => {
        dispatch(changeMenuAction(value));
    }

    // const [scroll, setScroll] = useState(`100px`);
    const [menu, setMenu] = useState(["Overview", "Summary"]);
    const [text, setText] = useState("");
    const [isopen, setIsopen] = useState(true);

    const search = (txt) => {
        setText(txt.target.value);
    }

    return (
        <div>
            {/* <StyledBanner> */}
            <div className={styles.banner}>
                <div className={styles.title}>
                    <Link to="/"><img alt="title" src="assets/img/logo.png" /></Link>
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
                <div className={styles.menuName}>Main</div>
            </div>
            <div className={styles.container} /*onWheel={handleOnWheel}*/>
                {isopen ? (
                    <div className={styles.menuBar}>
                        <ul className={styles.menuList}>
                            <li>
                                <div>Overview</div>
                                <ul className={styles.smallMenu}>
                                    <li onClick={() => changeMenu(["Overview", "Summary"])}><Link to="/overview/summary" className={styles.link}>Summary</Link></li>
                                    <li onClick={() => changeMenu(["Overview", "Custom view"])}>Custom view</li>
                                </ul>
                            </li>
                            <li>Alerts</li>
                            <li>
                                <div onClick={() => changeMenu(["Nodes"])}>
                                    <Link to='/nodes' className={styles.link}>Nodes</Link>
                                </div>
                            </li>
                            <li>
                                <div>Resources</div>
                                <ul className={styles.smallMenu}>
                                    <li onClick={() => changeMenu(["Resources", "Pods"])}><Link to='/resources/pods' className={styles.link}>Pods</Link></li>
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
                    main
                </div>
            </div>
        </div>
    );
}

export default Main;