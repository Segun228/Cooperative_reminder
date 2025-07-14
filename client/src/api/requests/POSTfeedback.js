import api from "./../api"
import { FEEDBACK_URL } from "../../../config"

const POSTfeedback = async (body) => {
    try{
        if(!body){
            throw new Error("Invalid fields given")
        }
        const response = await api.post(
            FEEDBACK_URL,
            {
                body
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


export default POSTfeedback