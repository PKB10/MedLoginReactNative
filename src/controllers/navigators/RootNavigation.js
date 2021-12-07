/*!
 @file RootNavigation.js

 @brief  Root navigation for the app
 @discussion This file contains root navigation functions for the app

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import * as React from 'react';
import {StackActions} from '@react-navigation/native';
export const navigationRef = React.createRef(); // export a ref for navigation object 

// Function to navigate to a screen using screen name (and params, if any)
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

// Function to wipe navigator state and reset with new route
export function reset(name, params) {
    navigationRef.current?.reset({
        index:0,
        routes:[{name:name}],
        params
      });
  }
  
// Function to close active screen and move back in the stack
export function goBack() {
  navigationRef.current?.dispatch(StackActions.pop(1));
}

// Function to push a route onto navigate state
export function push(name) {
  navigationRef.current?.dispatch(StackActions.push(name));
}

