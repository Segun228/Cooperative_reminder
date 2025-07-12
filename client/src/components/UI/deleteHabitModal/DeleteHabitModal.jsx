import styles from "./deleteHabitModal.module.css"
import ActionButton from "../actionButton/ActionButton";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DELETEhabit from "../../../api/requests/DELETEhabit";
import ActionWarnButton from "../actionWarnButton/ActionWarnButton";

const DeleteHabitModal = ({initialOpen, setInitial, onClose, submitter, habit}) => {
    
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


    const deletePost = async (id) => {
        const response = await DELETEhabit(id)
        if(response?.error){
            setError(response?.error)
            setInitial(true)
            setOpen(true)
        }
        else{
            handleClose()
        }
    }
    return( 
        <>
            {open && 
                <>
                    <div className={styles.background}></div>
                    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                        <MdOutlineCancel className={styles.cancel} onClick={()=>{handleClose()}} />
                        <div className={styles.title}>Delete habit</div>
                        {userID && 
                            <>
                                <>
                                    <div>Are you sure you want to delete:</div>
                                    <div className={styles.metatitle} style={{color:"red"}}>{habit?.name}</div>
                                    <ActionWarnButton onClick={()=>{deletePost(habit?.id)}}>Delete</ActionWarnButton>
                                </>
                                {error && 
                                <div style={{
                                    color:"red"
                                }}>
                                    An error while deleting habit
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

export default DeleteHabitModal;