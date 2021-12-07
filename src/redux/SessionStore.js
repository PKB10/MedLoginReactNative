/*!
 @file session.reducer.js

 @brief Reducer for user session state store
 @discussion This file contains the reducer for user session state

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import { createStore, combineReducers } from "redux";
import userSessionReducer from "./reducers/session.reducer";

const AppReducer = combineReducers({
    userSessionReducer
})

const RootReducer=(state,action)=>{
    return AppReducer(state,action)
}

// Create a redux Store to save session state
const store = createStore(RootReducer)

export default store;