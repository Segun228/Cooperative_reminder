import styles from "./OAuthPage.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL, ACCESS_TOKEN } from "../../../config";
import axios from "axios";
import { useEffect, useRef } from "react";
const OAuthPage = () => {
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
            console.log(token)
            const URL_CALLBACK = BASE_URL + "auth/github/callback?code=" + String(token)
            console.log("sending the query", URL_CALLBACK)
            const response = await axios.get(URL_CALLBACK)
            if(!response?.data?.token){
                throw new Error("Invalid token")
            }
            localStorage.setItem(ACCESS_TOKEN, response?.data?.token)
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