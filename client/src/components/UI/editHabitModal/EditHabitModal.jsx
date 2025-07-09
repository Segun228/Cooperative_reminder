import styles from "./editHabitModal.module.css"
import ActionButton from "../actionButton/ActionButton";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditHabitField from "../editHabitField/EditHabitField";
import PUThabit from "../../../api/requests/PUThabit";

const EditHabitModal = ({initialOpen, setInitial, habit}) => {
    
    const [open, setOpen] = useState(initialOpen || false);
    const [error, setError] = useState(null)

    useEffect(
        ()=>{
            setOpen(initialOpen)
        },
        [initialOpen]
    )

    let userID = useSelector(state => state.main.userID)

    const handleClose = () => {
        setOpen(false)
        setInitial(false)
    }

    const handleRedirect = ()=>{
        navigate("/login", { state: { from: location } });
    }
    

    const editPost = async ({
        name,
        body,
        frequency,
        time,
        timeZone,
    }) => {
        setError(null);
        const data = {
            name,
            description: body,
            frequency,
            remind_time: time,
            timezone: timeZone,
        }
        const response = await PUThabit(data, habit?.id)
        console.log("error response", response)
        if(response?.error){
            setError(response?.error)
            setInitial(true)
            setOpen(true)
        }
        else{
            setInitial(false)
            setOpen(false)
        }
    }
    return( 
        <>
            {open && 
                <>
                    <div className={styles.background}></div>
                    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                        <MdOutlineCancel className={styles.cancel} onClick={()=>{handleClose()}} />
                        <div className={styles.title}>Edit habit</div>
                        {userID && 
                            <>
                                <EditHabitField sender={editPost} data={habit}/>
                                {error && 
                                <div style={{
                                    color:"red"
                                }}>
                                    An error while editing a habit
                                </div>}
                            </>
                        }
                        {!userID && 
                            <div className={styles.subtitle}>You need to register first</div>
                        }
                    </div>
                </>
            }
        </>
    );
}

export default EditHabitModal;