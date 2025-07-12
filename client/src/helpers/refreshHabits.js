import GEThabits from "../api/requests/GEThabits"
import { setHabits } from "../store/slices/mainSlice"

const refreshHabits = async (dispatch) => {
    try{
        const serverHabits = await GEThabits(dispatch)
        if(!serverHabits){
            return []
        }
        dispatch(setHabits(serverHabits))

    }
    catch(error){
        console.error(error)
    }
}

export default refreshHabits