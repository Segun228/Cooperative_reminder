import api from "./../api"
import { BASE_URL, HABIT_URL } from "../../../config"

const PUThabit = async ({name, description, frequency, remind_time, timezone, start_date}, id) => {
    try{
        if(!name || !frequency || !remind_time || !timezone  || !id){
            throw new Error("Invalid fields of a habit given")
        }
        const NEW_URL = BASE_URL + HABIT_URL + `${id}`
        console.log({
                name,
                description,
                frequency,
                remind_time,
                timezone,
            })
        const response = await api.put(
            NEW_URL,
            {
                name,
                description,
                frequency,
                remind_time,
                timezone,
                start_date
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