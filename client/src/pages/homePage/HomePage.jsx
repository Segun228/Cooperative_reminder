import ActionButton from "../../components/UI/actionButton/ActionButton";
import CreateHabitModal from "../../components/UI/createHabitModal/CreateHabitModal";
import styles from "./homePage.module.css"
import GETme from "../../api/requests/GETme";
import GEThabit from "../../api/requests/GEThabit";
import POSThabit from "../../api/requests/POSThabit";
import PUThabit from "../../api/requests/PUThabit";
import DELETEhabit from "../../api/requests/DELETEhabit";
import { useEffect, useState } from "react";
import EditHabitModal from "../../components/UI/editHabitModal/EditHabitModal";
import HabitCard from "../../components/habitCard/HabitCard";
import { uid } from "uid";
import DeleteHabitModal from "../../components/UI/deleteHabitModal/DeleteHabitModal";
import HabitList from "../../components/sortableHabit/SortableHabit";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const CabinetPage = () => {
    useScrollToTop()
    const navigate = useNavigate()
    const [habits, setHabits] = useState([])


    return(
        <>
            <div className={styles.wrapper}>
                {
                    habits.length > 0 ?
                    <HabitList initialHabits={habits}/>
                    :
                    <Loader />
                }
                <section className={styles.lowerSection}>
                    <div className={styles.title}>Start up a new habit</div>
                    <ActionButton onClick={()=>{navigate("/create")}}>Create</ActionButton>
                </section>
            </div>

        </>
    );
}

export default CabinetPage;