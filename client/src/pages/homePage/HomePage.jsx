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

const CabinetPage = () => {
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    return(
        <>
            <ActionButton>Some shit</ActionButton>
            <ActionButton onClick={()=>{setOpen(!open)}}>create</ActionButton>
            <ActionButton onClick={()=>{setEditOpen(!editOpen)}}>update</ActionButton>
            <CreateHabitModal initialOpen={open} setInitial={setOpen}/>
            <EditHabitModal initialOpen={editOpen} setInitial={setEditOpen}/>
        </>
    );
}

export default CabinetPage;