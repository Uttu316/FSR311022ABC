import {combineReducers, createStore} from "redux" //v3
import authReducers from "./reducers/authReducer"
import userReducer from "./reducers/userReducer"
//redux toolkit - configureStore

const reducers = combineReducers({
    auth:authReducers,
    user:userReducer
})

 const store = createStore(reducers)



export default store

