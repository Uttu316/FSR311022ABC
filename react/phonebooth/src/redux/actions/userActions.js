import { userActionTypes } from "./actionTypes"



export const setUserDetails = (value)=>{
    return {
        type:userActionTypes.SET_USER_DETAILS,
        payload:value
    }
}


export const contactUser =  (user)=>{
    const {email,first_name} = user||{};
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Invitatioin from PhoneBooth&body=Hey ${first_name}, Join PhoneBooth!.`);
    return {
        type:userActionTypes.CONTACT_USER,
        user
    }
}

export const removeUser =  (user)=>{
    const {id} = user||{}
    return {
        type:userActionTypes.REMOVE_USER,
        userId:id
    }
}
