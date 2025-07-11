import {ACCESS_TOKEN} from "./../../config.js"
import { handleLogoutClean } from "../store/slices/mainSlice.js"

const handleLogout = (dispatch, navigate) => {
    navigate("/")
    dispatch(handleLogoutClean())
    localStorage.clear()
    window.location.reload()
}

export default handleLogout