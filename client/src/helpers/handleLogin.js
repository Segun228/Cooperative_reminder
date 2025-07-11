import GETme from "../api/requests/GETme"
import { setUserInfo } from "../store/slices/mainSlice"

const handleLogin = async (dispatch) => {
    try{
        const user = await GETme()
        dispatch(setUserInfo(user))
    }
    catch(error){
        console.error(error)
    }
}


export default handleLogin