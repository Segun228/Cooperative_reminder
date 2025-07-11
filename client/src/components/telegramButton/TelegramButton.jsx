import styles from "./telegramButton.module.css"
import { FaTelegram } from "react-icons/fa6";
import { children } from "react";

const TelegramButton = ({onClickFunction, children, disabled}) => {
    return(
        <button disabled={disabled} className={styles.button} onClick={()=>{onClickFunction()}}>
            <FaTelegram className={styles.icon}/>
            <span className={styles.caption}>{children || "Connect to TG"}</span>
        </button>
    )
}
export default TelegramButton