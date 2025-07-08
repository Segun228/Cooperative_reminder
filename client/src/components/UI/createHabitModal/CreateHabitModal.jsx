import styles from "./createHabitModal.module.css"
import ActionButton from "../actionButton/ActionButton";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreateHabitField from "../createHabitField/CreateHabitField";

const CreateHabitModal = ({height, width, placeholder, caption, settings, sender}) => {
    
    const [open, setOpen] = useState();
    let userID = useSelector(state => state.main.userID)

    const handleClose = () => {
        setOpen(false)
    }

    const handleRedirect = ()=>{
        navigate("/login", { state: { from: location } });
    }
    
    return ( 
        <>
            <ActionButton text="Добавить" onClick={()=>{setOpen(true)}}/>
            {open && 
                <>
                    <div className={styles.background}></div>
                    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                        <MdOutlineCancel className={styles.cancel} onClick={()=>{handleClose()}} />
                        <div className={styles.title}>New habit</div>
                        {userID && 
                            <CreateHabitField />
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