import Loader from "../../components/loader/Loader";
import CreateHabitModal from "../../components/UI/createHabitModal/CreateHabitModal";
import styles from "./createPage.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePage = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true)
    return(
        <>
            <div style={{
                width:"100%",
                height:"110vh"
            }}> </div>
            <CreateHabitModal onClose={()=>{navigate("/")}} initialOpen={open} setInitial={setOpen} submitter={()=>{}}/>
        </>
    );
}

export default CreatePage;