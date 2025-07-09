import api from "./../api"
import { BASE_URL, HABIT_URL } from "../../../config"

const PUThabit = async ({name, description, frequency, remind_time, timezone}, id) => {
    try{
        if(!name || !description || !frequency || !remind_time || !timezone  || !id){
            throw new Error("Invalid fields of a habit given")
        }
        const NEW_URL = BASE_URL + HABIT_URL + `${id}`
        const response = await api.put(
            NEW_URL,
            {
                name,
                description,
                frequency,
                remind_time,
                timezone,
            }
        )
        console.log(response?.data)
        return response?.data
    }
    catch(error){
        console.error(error)
        return error
    }
}


export default PUThabit