/*!
 @file MLSharedPreferences.js

 @brief MLSharedPreferences 
 @discussion This file contains the Shared Preferences functions (local storage)

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

// Get session details
export function getUserSession(userData) {
  AsyncStorage.getItem('user')
    .then((value) => {
      const user = JSON.parse(value);
      userData(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Delete session details
export async function deleteUserSession() {
  AsyncStorage.removeItem('user')
    .then(() => {
      console.log(
        'data removed'
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

// Save session details
export async function saveUserSession(item) {
  AsyncStorage.setItem('user', JSON.stringify(item))
    .then(() => {
      console.log(
        'data saved'
      );
    })
    .catch((error) => {
      console.log(error);
    });
}