import { useEffect, useState } from "react";
import styles from "./cabinetPage.module.css"
import TelegramButton from "../../components/UI/telegramButton/TelegramButton";
import getUserName from "../../helpers/getUserName";
import getTelegramID from "../../helpers/getTelegramID";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GETme from "../../api/requests/GETme";
import { BOT_URL } from "../../../config";

const CabinetPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const [telegramID, setTelegramID] = useState("")
    const [userID, setUserID] = useState("")
    const [changableTG, setChangableTG] = useState("")
    const username_fallback = useSelector(state => state.main?.username)
    const tg_fallback = useSelector(state => state.main?.telegramID)
    const userID_fallback = useSelector(state => state.main?.userID)

    useEffect(()=>{
        const getPageInfo = async () => {
            try{
                const user = await GETme(dispatch)
                setUsername(user?.username || username_fallback)
                setTelegramID(user?.telegram_id || tg_fallback)
                setUserID(user?.id || userID_fallback)
            }
            catch(error){
                console.error(error)
                setUsername(username_fallback || "")
                setTelegramID(tg_fallback || "")
                setUserID(userID_fallback || "")
            }
        }
        getPageInfo()
    }, [])

    return(
        <>
            <div className={styles.wrapper}>
                <div>Hello, {username || "User"}</div>
                <div>Turn on BOT notifications to stay consistent</div>
                <TelegramButton disabled={!userID} onClickFunction={()=>{window.location.href = (BOT_URL)}}/>
            </div>
        </>
    );
}

export default CabinetPage;