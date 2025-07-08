import api from "./../api"
import { BASE_URL } from "../../../config"

const GEThabits = async () => {
    const NEW_URL = BASE_URL + "api/habits/"
    try{
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