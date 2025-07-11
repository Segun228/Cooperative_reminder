import ActionButton from "../actionButton/ActionButton";
import Accordeon from "../../accordeon/Accordeon"
import styles from "./editHabitField.module.css"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from 'moment-timezone';
const EditHabitField = ({ data, sender, settings, placeholder, caption }) => {
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [frequency, setFrequency] = useState("");
    const [time, setTime] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        console.log(data)
        if (data) {
        setName(data?.name || "");
        setBody(data?.description || "");
        setFrequency(data?.frequency || "");
        setTime(data?.remind_time || "");
        setTimeZone(data?.timezone || "");
        setStartDate(data?.start_date ? data.start_date.slice(0, 10) : "");
        }
    }, [data]);

const handleSubmit = (e) => {
    e.preventDefault();
    const habitData = {
        name,
        body,
        frequency: frequency?.value || "",
        time,
        timeZone: timeZone?.value || "",
    };
    if (typeof sender === "function") {
        sender(habitData);
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
                <ActionButton type="submit" reload={true}>Update</ActionButton>
            </form>
        </div>
    </>);
}

export default EditHabitField;