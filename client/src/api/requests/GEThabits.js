import api from "./../api"
import { BASE_URL, HABIT_USER_URL } from "../../../config"
import GETme from "./GETme"


const GEThabits = async () => {
    try{
        const me = await GETme()
        if(!me){
            throw new Error("could not receive data about myself")
        }
        const NEW_URL = BASE_URL + HABIT_USER_URL + `${me?.id}/`
        const response = await api.get(NEW_URL)
        console.log(response?.data)
        return response?.data
    }
    catch(error){
        console.log(error)
        return error
    }
}


export default GEThabits