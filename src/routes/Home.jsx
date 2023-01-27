import styles from "./css/Home.module.css"
import { IoIosNotifications } from "react-icons/io"
import { RxDividerVertical } from "react-icons/rx"
import { FaRegUser } from "react-icons/fa"
import BarChart from "../components/BarChart"
import PieChart from "../components/PieChart"
import LineChart from "../components/LineChart"


function Home() {
    return (
        <div>
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
            <div className={styles.container}>
                <div className={styles.menuBar}>
                    <ul className={styles.menuLists}>
                        <li>
                            <label class="overview" for="overview">Overview</label>
                            <input className={`${styles.menuInput} ${styles.overviewTg}`} id="overview" type="checkbox" />
                            <ul className={styles.overviewList}>
                                <li>Summary</li>
                                <li>Custom view</li>
                            </ul>
                        </li>
                        <li>Alerts</li>
                        <li>Nodes</li>
                        <li>Resources</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className={styles.contents}>
                    <div className={styles.chart}>
                        <BarChart />
                    </div>
                    <div className={styles.chart}>
                        <PieChart />
                    </div>
                    <div className={styles.chart}>
                        <LineChart />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;

