import styles from "./habitCard.module.css"
import { BsThreeDots } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import EditHabitModal from "../UI/editHabitModal/EditHabitModal";
import DeleteHabitModal from "../UI/deleteHabitModal/DeleteHabitModal";
import { useState } from "react";
const HabitCard = ({data}) => {
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)


    function trimSeconds(timeStr) {
        return timeStr.split(":").slice(0, 2).join(":");
    }


    return ( 
        <>
            <EditHabitModal habit={data} initialOpen={editModal} setInitial={setEditModal}/>
            <DeleteHabitModal habit={data} initialOpen={deleteModal} setInitial={setDeleteModal}/>
            <div className={styles.wrapper}>
                <section className={styles.section}>
                    <div className={styles.header}>{data?.name || "Habit"}</div>
                    <div className={styles.main}>{data?.description || ""}</div>
                    <div className={styles.caption}>{data?.frequency || ""} notifications at {trimSeconds(data?.remind_time) || ""}</div>
                    <div className={styles.actionBlock}>
                        <BsThreeDots className={styles.logo} onClick={()=>{setEditModal(true)}}/>
                    </div>
                </section>
                <FaList className={styles.moveLogo} />
                <GiCancel className={styles.deletelogo} onClick={()=>{setDeleteModal(true)}}/>
            </div>
        </>
    );
}

export default HabitCard;