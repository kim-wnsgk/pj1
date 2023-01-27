import styles from "./css/Nodes.module.css"
import { MdExpandMore } from "react-icons/md"

function Nodes() {
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
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.name}>Node-01</div>
                <div className={styles.cpu}>20</div>
                <div className={styles.ram}>35</div>
                <div className={styles.disk}>35</div>
                <div className={styles.ip}>127.0.0.1<MdExpandMore style={{ float: 'right' }} /></div>
            </div>
        </div>
    );
}

export default Nodes;