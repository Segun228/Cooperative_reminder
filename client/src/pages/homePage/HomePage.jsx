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

const CabinetPage = () => {



    const habits = [
        {
            id: 1,
            user_id: 1,
            name: "Read a book",
            description: "Read 20 pages of a non-fiction book.",
            frequency: "daily",
            remind_time: "21:00:00",
            timezone: "UTC",
            start_date: "2025-07-01T00:00:00Z"
        },
        {
            id: 2,
            user_id: 1,
            name: "Morning exercise",
            description: "Do a 15-minute stretch or workout.",
            frequency: "daily",
            remind_time: "07:00:00",
            timezone: "UTC",
            start_date: "2025-07-01T00:00:00Z"
        },
        {
            id: 3,
            user_id: 1,
            name: "Journal writing",
            description: "Write a short reflection about your day.",
            frequency: "daily",
            remind_time: "22:30:00",
            timezone: "UTC",
            start_date: "2025-07-01T00:00:00Z"
        },
        {
            id: 4,
            user_id: 1,
            name: "Drink water",
            description: "Drink at least 2 liters of water.",
            frequency: "daily",
            remind_time: "12:00:00",
            timezone: "UTC",
            start_date: "2025-07-01T00:00:00Z"
        },
        {
            id: 5,
            user_id: 1,
            name: "Learn coding",
            description: "Spend 1 hour solving coding problems.",
            frequency: "daily",
            remind_time: "18:00:00",
            timezone: "UTC",
            start_date: "2025-07-01T00:00:00Z"
        }
    ];
    return(
        <>
            <div className={styles.wrapper}>
                {
                    habits.length > 0 ?
                    <HabitList initialHabits={habits}/>
                    :
                    <Loader />
                }
            </div>

        </>
    );
}

export default CabinetPage;