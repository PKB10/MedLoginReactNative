/*!
 @file MLNavigator.js

 @brief App stack navigator
 @discussion This file contains the app stack navigator

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

 import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import ComingSoonScreen from '../../screens/ComingSoonScreen';
import Drawers from './DrawerNavigator'

const Stack = createStackNavigator();

function MLStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ComingSoonScreen" component={ComingSoonScreen} />
        <Stack.Screen name="Drawers" component={Drawers} />
    </Stack.Navigator>
  );
}

export default MLStack;

//<Stack.Screen name="SplashScreen" component={SplashScreen} />