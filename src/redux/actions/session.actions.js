/*!
 @file session.actions.js

 @brief Actions for the reducer for user session state store
 @discussion This file contains the actions for the reducer for user session state store

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import { SAVEPATIENTSLIST, DISPLAYVISIBLEPATIENTS } from "../constants/session.constants";

// Save a Redux store holding the state of your patients list
export const displayVisible = () =>{
   return {
      type: DISPLAYVISIBLEPATIENTS,
   }
}

// Save a Redux store holding the state of your patients list
export const savePatient = ( PatientsList ) =>{
     return {
        type: SAVEPATIENTSLIST,
        PatientsList: PatientsList,
     }
}