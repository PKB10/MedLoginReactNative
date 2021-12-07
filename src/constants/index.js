/*!
 @file Constants.js

 @brief Constants 
 @discussion This file contains appconstants

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */
import {Platform, Dimensions, StatusBar} from 'react-native';
 //import colors from './MLColors';
 
//Colors 
//export {
  // colors
//}

export const colors = {
    MLWhite:'white',
    MLTextColor:'#707070',
    MLBlue:'#2196F3',
    MLTealBlue: '#57B1DA',
    MLGreenAccent:'#69F0AE'
    };



//UI constants
const {width, height} = Dimensions.get('screen');

export const windowWidth = width;
export const windowHeight = height;
export const aspectRatio = windowHeight / windowWidth;
export const plateformIOS = Platform.OS === 'ios' ? true : false;
export const statusbarHeight = plateformIOS ? 0 : StatusBar.currentHeight;
export const headerHeight = 36;

//API constants
export const services = {
    login: '/users/login',
    patients: '/patients',
  };
  