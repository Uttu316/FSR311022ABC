import {combineReducers, createStore} from "redux" //v3
import authReducers from "./reducers/authReducer"
import userReducer from "./reducers/userReducer"
import utilsReducer from "./reducers/utilsReducer"
//redux toolkit - configureStore

const reducers = combineReducers({
    auth:authReducers,
    user:userReducer,
    utils:utilsReducer
})

 const store = createStore(reducers)



export default store

