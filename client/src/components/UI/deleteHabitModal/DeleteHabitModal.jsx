import styles from "./deleteHabitModal.module.css"
import ActionButton from "../actionButton/ActionButton";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DELETEhabit from "../../../api/requests/DELETEhabit";
import ActionWarnButton from "../actionWarnButton/ActionWarnButton";
import refreshHabits from "../../../helpers/refreshHabits";
import { deleteHabit } from "../../../store/slices/mainSlice";

const DeleteHabitModal = ({initialOpen, setInitial, onClose = ()=>{}, submitter, habit}) => {
    
    const [open, setOpen] = useState(initialOpen || false);
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

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
        try{
            await DELETEhabit(id)
            dispatch(deleteHabit(id))
            setError(false)
            handleClose()
        }
        catch(error){
            console.log(error)
            setError(error)
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