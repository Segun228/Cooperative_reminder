import GETme from "../api/requests/GETme"
import { useSelector } from "react-redux"

const getUserName = async (dispatch) => {
    try{
        const user_info = await GETme(dispatch)
        if(!user_info?.username){
            throw new Error("Error while getting user name from the server")
        }
        return user_info?.username
    }
    catch(error){
        console.error(error)
        return undefined
    }
}

export default getUserName