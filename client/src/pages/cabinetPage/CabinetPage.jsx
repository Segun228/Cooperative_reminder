import { useEffect, useState } from "react";
import styles from "./cabinetPage.module.css"
import TelegramButton from "../../components/UI/telegramButton/TelegramButton";


const CabinetPage = () => {
    const [username, setUsername] = useState(null)
    const [telegramID, setTelegramID] = useState("")

    useEffect(()=>{

    }, [])

    return(
        <>
            <TelegramButton />
        </>
    );
}

export default CabinetPage;