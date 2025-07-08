import ActionButton from "../../components/UI/actionButton/ActionButton";
import CreateHabitModal from "../../components/UI/createHabitModal/CreateHabitModal";
import styles from "./homePage.module.css"
import GETme from "../../api/requests/GETme";
import GEThabit from "../../api/requests/GEThabit";

const CabinetPage = () => {

    return(
        <>
            <ActionButton>Some shit</ActionButton>
            <CreateHabitModal />
            <button onClick={()=>{console.log(GEThabit(1))}}>query</button>
        </>
    );
}

export default CabinetPage;