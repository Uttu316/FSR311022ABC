import {combineReducers, createStore} from "redux" //v3
import authReducers from "./reducers/authReducer"
import userReducer from "./reducers/userReducer"
import utilsReducer from "./reducers/utilsReducer"
import {devToolsEnhancerDevelopmentOnly} from "@redux-devtools/extension"
//redux toolkit - configureStore

const reducers = combineReducers({
    auth:authReducers,
    user:userReducer,
    utils:utilsReducer
})

 const store = createStore(reducers,devToolsEnhancerDevelopmentOnly())



export default store

