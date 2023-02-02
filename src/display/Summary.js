import BarChart from "../components/BarChart"
import PieChart from "../components/PieChart"
import LineChart from "../components/CustomChart"

import styles from "./css/Summary.module.css"

function Summary() {
    return (
        <div className={styles.container}>
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
    );
}

export default Summary;