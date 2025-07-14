import { useEffect, useState } from "react";
import styles from "./cabinetPage.module.css"
import TelegramButton from "../../components/telegramButton/TelegramButton";
import getUserName from "../../helpers/getUserName";
import getTelegramID from "../../helpers/getTelegramID";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GETme from "../../api/requests/GETme";
import { BOT_URL } from "../../../config";
import ActionButton from "../../components/UI/actionButton/ActionButton";
import handleLogout from "../../helpers/handleLogout";
import POSTfeedback from "../../api/requests/POSTfeedback";

const CabinetPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const [telegramID, setTelegramID] = useState("")
    const [userID, setUserID] = useState("")
    const [feedback, setFeedback] = useState("")
    const [changableTG, setChangableTG] = useState("")
    const username_fallback = useSelector(state => state.main?.username)
    const tg_fallback = useSelector(state => state.main?.telegramID)
    const userID_fallback = useSelector(state => state.main?.userID)


    const handleLogoutCallback = () => {
        handleLogout(dispatch)
    }


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


    const handleSubmit = async (e) => {
        e.preventDefault()
        setFeedback("")
        await POSTfeedback(feedback)
        console.log("Feedback sent")
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.title}>Hello, {username || "User"}</div>

                <section className={styles.section}>
                    <div className={styles.caption}>Turn on BOT notifications to stay consistent</div>
                    <TelegramButton disabled={!userID} onClickFunction={()=>{window.location.href = (BOT_URL)}}/>
                </section>
                <form className={styles.form} onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className={styles.caption}>You can leave your comliants or suggestions there</div>
                    <textarea  
                        placeholder={"Express yourself..."}
                        className={styles.field}
                        name="answer"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <ActionButton type="submit">Send</ActionButton>
                </form>
                <section className={styles.section}>
                    <div className={styles.caption}>Log out from the account</div>
                    <ActionButton onClick={()=>{handleLogout(dispatch, navigate)}}>Log out</ActionButton>
                </section>
            </div>
        </>
    );
}

export default CabinetPage;