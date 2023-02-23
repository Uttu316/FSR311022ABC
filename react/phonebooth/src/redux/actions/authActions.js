import { authActionTypes } from "./actionTypes"
import * as LocalStorage from "../../utils/localstorage";





export const setIsLoggedIn = (value)=>{
    return {
        type:authActionTypes.SET_IS_LOGGEDIN,
        payload:value
    }
}



export const logoutUser = ()=>{
    LocalStorage.clearLS()
    return {
        type:authActionTypes.LOGOUT,
    }
}