/*!
 @file session.reducer.js

 @brief Reducer for user session state store
 @discussion This file contains the reducer for user session state

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import { SAVEPATIENTSLIST, DISPLAYVISIBLEPATIENTS } from "../constants/session.constants";

const initialState={
    visible:true,
    PatientsList:[],
}

function user(state=initialState,action){
    switch(action.type){
        case DISPLAYVISIBLEPATIENTS:
            return {
                ...state,
                visible:true
            }
        case SAVEPATIENTSLIST:
            return {
                ...state,
                visible:false,
                PatientsList: action.PatientsList
            }
        default:
            return state;
    }
}

export default user