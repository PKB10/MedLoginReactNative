import React from 'react';
 import {
   View,
   StyleSheet,
   Text
 } from 'react-native';
 import {TouchableRipple} from 'react-native-paper';
 import { Ionicons } from '@expo/vector-icons';
 import { actuatedNormalize } from '../../controllers/utils';
 
 export const MLButton = React.memo(props => {
   const {borderColor, borderRadius, buttonHeight, width, text, backgroundColor, textColor, icon} = props
   return (
     <View
       style={{
         ...styles.container,borderRadius: borderRadius, height: buttonHeight,
         backgroundColor:backgroundColor,borderColor: borderColor, width: width, opacity:props.opacity?props.opacity:1
       }}>
       <TouchableRipple
         borderless={true}
         onPress={props.onPress}
         rippleColor="rgba(0,0,0,0.1)"
         style={{
           height: '100%',
           width: '93%',
           borderRadius: borderRadius,
           justifyContent: 'center',
           alignSelf: 'center',
           flexDirection:'row',
           alignItems:'center'
         }}>
           <>
           {icon ? <Ionicons name={icon} size={24} color={textColor} /> : null}
         <Text
           style={{
             fontSize: actuatedNormalize('16'),
             color: textColor,
             textAlign: 'center'
           }}>
           {text}
         </Text>
         </>
       </TouchableRipple>
     </View>
   );
 });
 const styles = StyleSheet.create({
   container: {
     alignItems: 'center',
     justifyContent: 'center',
     alignSelf: 'center',
     borderWidth:1                                                                                                                                                                                                                                                                             
   },
 });
 