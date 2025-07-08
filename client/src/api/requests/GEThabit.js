import api from "./../api"
import { BASE_URL } from "../../../config"
import GETme from "./GETme"


const GEThabit = async (id) => {
    try{
        if(!id){
            throw new Error("invalid id")
        }
        const NEW_URL = BASE_URL + "api/habits/" + `${id}/`
        const response = await api.get(NEW_URL)
        console.log(response?.data)
        return response?.data
    }
    catch(error){
        console.log(error)
        return error
    }
}


export default GEThabit