import ActionButton from "../../components/UI/actionButton/ActionButton";
import CreateHabitModal from "../../components/UI/createHabitModal/CreateHabitModal";
import styles from "./homePage.module.css"
import GETme from "../../api/requests/GETme";
import GEThabit from "../../api/requests/GEThabit";
import POSThabit from "../../api/requests/POSThabit";
import PUThabit from "../../api/requests/PUThabit";
import DELETEhabit from "../../api/requests/DELETEhabit";

const CabinetPage = () => {

    return(
        <>
            <ActionButton>Some shit</ActionButton>
            <CreateHabitModal />
            <button onClick={()=>{console.log(GEThabit(1))}}>query</button>
            <button onClick={()=>{console.log(POSThabit(
                {
                    name:"first habit",
                    description:"damn shitttt eohwoefoiwefoijwjfojwofejjfiejwojwefji",
                    frequency:"daily",
                    remind_time:"7:00",
                    timezone:"UTC+1",
                    start_date:"2025-08-01T00:00:00Z"
                }
            ))}}>post</button>
            <button onClick={()=>{console.log(PUThabit(
                {
                    name:"first habit",
                    description:"damn shitttt eohwoefoiwefoijwjfojwofejjfiejwojwefji",
                    frequency:"daily",
                    remind_time:"7:00",
                    timezone:"UTC+1",
                },
                8
            ))}}>put</button>
            <button onClick={()=>{console.log(DELETEhabit(8))}}>delete</button>
        </>
    );
}

export default CabinetPage;