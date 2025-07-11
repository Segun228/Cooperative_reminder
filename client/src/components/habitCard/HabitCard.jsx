import styles from "./habitCard.module.css"
import { BsThreeDots } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
const HabitCard = ({data}) => {
    return ( 
        <>
            <div className={styles.wrapper}>
                <FaList className={styles.moveLogo}/>
                <div className={styles.header}>{data?.name || "Habit"}</div>
                <div className={styles.main}>{data?.description || ""}</div>
                <div className={styles.caption}>{data?.frequency || ""}</div>
                <div className={styles.caption}>{data?.remind_time || ""}</div>
                <div className={styles.actionBlock}>
                    <BsThreeDots className={styles.logo}/>
                    <AiFillDelete className={styles.logo}/>
                </div>
            </div>
        </>
    );
}

export default HabitCard;