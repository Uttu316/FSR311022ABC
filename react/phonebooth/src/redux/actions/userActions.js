import { userActionTypes } from "./actionTypes"



export const setUserDetails = (value)=>{
    return {
        type:userActionTypes.SET_USER_DETAILS,
        payload:value
    }
}