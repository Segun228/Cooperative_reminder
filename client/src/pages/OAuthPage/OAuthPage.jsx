import styles from "./OAuthPage.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL, ACCESS_TOKEN } from "../../../config";
import axios from "axios";
import { useEffect, useRef } from "react";
import GETme from "../../api/requests/GETme";
import handleLogin from "../../helpers/handleLogin";
import { useDispatch } from "react-redux";
const OAuthPage = () => {
    const dispatch = useDispatch()
    const calledRef = useRef(false);
    const query = new URLSearchParams(useLocation().search);
    const navigate = useNavigate()

    const getToken = async () => {
        if (calledRef.current) return;
        calledRef.current = true;
        try{
            const token = query.get("code");
            if(!token){
                navigate("/login")
            }
            const URL_CALLBACK = BASE_URL + "auth/github/callback?code=" + String(token)
            const response = await axios.get(URL_CALLBACK)
            if(!response?.data?.token){
                throw new Error("Invalid token")
            }
            localStorage.setItem(ACCESS_TOKEN, response?.data?.token)
            await handleLogin(dispatch)
            navigate("/")
        }
        catch(error){
            console.error(error)
            navigate("/login")
        }
    }

    useEffect(()=>{
        getToken()
    }, [])


    return(
        <>
            <div style={{width:"100%", minHeight:"100vh", backgroundColor:"white"}}></div>
        </>
    );
}

export default OAuthPage;