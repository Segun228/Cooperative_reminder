import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"
import api from "./../api/api.js";
import {REFRESH_TOKEN, ACCESS_TOKEN} from "./../../config.js"
import { children, useEffect, useState } from "react";

const RequireAdmin = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(null)


    return isAdmin ? children : <Navigate to="/login" />
}

export default RequireAdmin