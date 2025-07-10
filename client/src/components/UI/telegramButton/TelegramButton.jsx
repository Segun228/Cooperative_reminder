import styles from "./telegramButton.module.css"
import { FaTelegram } from "react-icons/fa6";

const TelegramButton = () => {
    return(
        <button className={styles.button}>
            <FaTelegram className={styles.icon}/>
            <span className={styles.caption}>Connect to TG</span>
        </button>
    )
}
export default TelegramButton