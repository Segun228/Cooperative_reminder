import api from "./../api"
import { BASE_URL } from "../../../config"

const DELETEhabit = async (id) => {
    try{
        if(!id){
            throw new Error("Invalid fields of habit id given")
        }
        const NEW_URL = BASE_URL + `api/habits/${id}`
        const response = await api.delete(NEW_URL)
        console.log(response?.data)
        return response?.data
    }
    catch(error){
        console.log(error)
        return error
    }
}


export default DELETEhabit