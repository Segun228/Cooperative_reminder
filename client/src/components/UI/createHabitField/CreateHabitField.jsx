import ActionButton from "../actionButton/ActionButton";
import styles from "./createHabitField.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
const CreateHabitField = ({height, width, placeholder, caption, settings, sender, opener, data}) => {
    const [answer, setAnswer] = useState(data?.body || "");
    const [name, setName] = useState(data?.name || "");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

    };


    return (
    <>
        <div className={styles.wrapper} style={settings}>
            <form className={styles.fieldForm} onSubmit={handleSubmit}>
                <div className={styles.caption}>{caption || "Fill in the form"}</div>
                <input  
                    placeholder={"Add title..."}
                    className={styles.input}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea  
                    placeholder={placeholder || "Add description..."}
                    className={styles.field}
                    name="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <div className={styles.caption}>{"Select frequency"}</div>
                <input  
                    type="text"
                    placeholder={"Add frequency..."}
                    className={styles.input}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className={styles.caption}>{"Select remind time"}</div>
                <input  
                    type="time"
                    placeholder={"Add frequency..."}
                    className={styles.input}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className={styles.caption}>{"Select start date (optional)"}</div>
                <input  
                    type="date"
                    placeholder={"Add frequency..."}
                    className={styles.input}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <ActionButton type="submit" reload={true}>Create</ActionButton>
            </form>
        </div>
    </>);
}

export default CreateHabitField;