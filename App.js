/*!
 @file App.js

 @brief  Starting point of the app
 @discussion This file contains the app definition

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import React from 'react';
import {Provider} from 'react-redux' //redux provider
import SessionStore from './src/redux/SessionStore'
import {NavigationContainer} from '@react-navigation/native'; //App must be wrapped in a NavigationContainer
import {navigationRef} from './src/controllers/navigators/RootNavigation';// Import the root navigation object ref, we use this as NavigationContainer
import MLNavigator from './src/controllers/navigators/MLNavigator';

export default App = () => (
   <>
   <Provider store={SessionStore}>
      <NavigationContainer ref={navigationRef}> 
         <MLNavigator/>
      </NavigationContainer>
   </Provider>
   </>
);