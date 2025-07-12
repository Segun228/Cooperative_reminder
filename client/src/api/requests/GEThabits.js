import api from "./../api"
import { BASE_URL, HABIT_USER_URL } from "../../../config"
import GETme from "./GETme"


const GEThabits = async (dispatch) => {
    try{
        const me = await GETme(dispatch)
        if(!me){
            throw new Error("could not receive data about myself")
        }
        const NEW_URL = BASE_URL + HABIT_USER_URL + `${me?.id}/`
        console.log(NEW_URL)
        const response = await api.get(NEW_URL)
        console.log(me)
        return response?.data
    }
    catch(error){
        console.log(error)
        return error
    }
}


export default GEThabits