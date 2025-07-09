import ActionButton from "../actionButton/ActionButton";
import Accordeon from "./../../accordeon/Accordeon"
import styles from "./createHabitField.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from 'moment-timezone';
const CreateHabitField = ({height, width, placeholder, caption, settings, sender, opener, data}) => {
    
    const [name, setName] = useState(data?.name || "");
    const [body, setBody] = useState(data?.body || "");
    const [frequency, setFrequency] = useState(data?.frequency || "");
    const [time, setTime] = useState(data?.time || "");
    const [timeZone, setTimeZone] = useState(data?.timeZone || "");
    const [startDate, setStartDate] = useState(data?.startDate || "");
    const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
        const startDateISO = startDate ? new Date(startDate).toISOString() : null
    const habitData = {
        name,
        body,
        frequency: frequency?.value || "",
        time,
        timeZone: timeZone?.value || "",
        startDate: startDateISO
    };
    if (typeof sender === "function") {
        sender(habitData)
        setName("")
        setBody("")
        setFrequency("")
        setTime("")
        setTimeZone("")
        setStartDate("")
    }
}


    const timeZones = moment.tz.names();
    const timeZoneOptions = timeZones.map((tz) => ({
        value: tz,
        label: tz
    }));
    const frequency_options = [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' }
    ]


    return(
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
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className={styles.caption}>{"Select frequency"}</div>
                <Accordeon options={frequency_options} value={frequency} onChange={(selectedOption)=>{setFrequency(selectedOption)}}/>
                <div className={styles.caption}>{"Select remind time"}</div>
                <input  
                    type="time"
                    placeholder={"Add frequency..."}
                    className={styles.input}
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <div className={styles.caption}>{"Select timezone"}</div>
                <Accordeon options={timeZoneOptions} value={timeZone} onChange={(selectedOption)=>{setTimeZone(selectedOption)}}/>
                <div className={styles.caption}>{"Select start date (optional)"}</div>
                <input  
                    type="date"
                    placeholder={"Add start date..."}
                    className={styles.input}
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <ActionButton type="submit" reload={true}>Create</ActionButton>
            </form>
        </div>
    </>);
}

export default CreateHabitField;