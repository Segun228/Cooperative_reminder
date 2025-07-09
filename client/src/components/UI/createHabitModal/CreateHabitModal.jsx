import styles from "./createHabitModal.module.css"
import ActionButton from "../actionButton/ActionButton";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreateHabitField from "../createHabitField/CreateHabitField";
import POSThabit from "../../../api/requests/POSThabit";

const CreateHabitModal = ({initialOpen, setInitial, onClose, submitter}) => {
    
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
        onClose()
    }

    const handleRedirect = ()=>{
        navigate("/login", { state: { from: location } });
    }
    

    const createPost = async ({
        name,
        body,
        frequency,
        time,
        timeZone,
        startDate
    }) => {
        const data = {
            name,
            description: body,
            frequency,
            remind_time: time,
            timezone: timeZone,
            start_date: startDate
        }
        const response = await POSThabit(data)
        if(response?.error){
            setError(response?.error)
            setInitial(true)
            setOpen(true)
        }
        else{
            setInitial(false)
            setOpen(false)
            setTimeout(100)
            setInitial(true)
            setOpen(true)
        }
    }
    return( 
        <>
            {open && 
                <>
                    <div className={styles.background}></div>
                    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                        <MdOutlineCancel className={styles.cancel} onClick={()=>{handleClose()}} />
                        <div className={styles.title}>New habit</div>
                        {userID && 
                            <>
                                <CreateHabitField sender={createPost}/>
                                {error && 
                                <div style={{
                                    color:"red"
                                }}>
                                    An error while creating a post
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

export default CreateHabitModal;