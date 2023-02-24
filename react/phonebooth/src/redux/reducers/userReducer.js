import * as LocalStorage from "../../utils/localstorage";
import { userActionTypes } from "../actions/actionTypes";

const intialState = {
    userDetails:LocalStorage.getLSValue("user")||null,
    contactedUser:[]
}

const userReducer = (state=intialState,action)=>{
    switch(action.type){
        case userActionTypes.SET_USER_DETAILS:{
            return {...state,userDetails:action.payload}
        }
        case userActionTypes.CONTACT_USER:{
            const isPresent = state.contactedUser.find((i)=>i.id===action.user.id);
            if(!isPresent){
                return {...state,contactedUser:[action.user,...state.contactedUser]}
            }
            return state
        }
        case userActionTypes.REMOVE_USER:{
            const newUsers = state.contactedUser.filter((i)=>i.id!==action.userId);
            return {...state,contactedUser:newUsers}
        }
        default:
            return state
    }
   
}

export default userReducer;

