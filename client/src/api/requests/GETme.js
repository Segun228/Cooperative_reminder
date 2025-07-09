import api from "./../api"
import { BASE_URL, ME_URL } from "../../../config"
import { useDispatch } from "react-redux"
import { setUserInfo } from "../../store/slices/mainSlice"


const GETme = async (dispatch) => {
    const NEW_URL = BASE_URL + ME_URL
    try{
        const response = await api.get(NEW_URL)
        console.log(response?.data)
        dispatch(setUserInfo(response?.data))
        return response?.data
    }
    catch(error){
        console.error(error)
        return error
    }
}


export default GETme