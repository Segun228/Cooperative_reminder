import GEThabits from "../api/requests/GEThabits"
import { setHabits } from "../store/slices/mainSlice"

const setupHabits = async (state, dispatch) => {
    try{
        const serverHabits = await GEThabits(dispatch)
        if(!serverHabits || serverHabits.length<=0){
            const storageHabits = state.main?.habits
            if(!storageHabits || storageHabits.length<=0){
                return []
            }
            return storageHabits
        }
        dispatch(setHabits(serverHabits))
        return serverHabits
    }
    catch(error){
        console.error(error)
        return []
    }
}

export default setupHabits