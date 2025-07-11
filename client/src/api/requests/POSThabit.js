import api from "./../api"
import { BASE_URL, HABIT_URL,  } from "../../../config"

const POSThabit = async ({name, description, frequency, remind_time, timezone, start_date}) => {
    const NEW_URL = BASE_URL + HABIT_URL
    try{
        if(!name || !frequency || !remind_time || !timezone || !start_date){
            throw new Error("Invalid fields of a habit given")
        }
        const response = await api.post(
            NEW_URL,
            {
                name,
                "description":description,
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
        console.log(error)
        return error
    }
}


export default POSThabit