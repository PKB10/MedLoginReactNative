/*!
 @file ComingSoonScreen.js

 @brief ComingSoonScreen 
 @discussion This file contains the buffer screen for non-implemented features

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {colors} from '../constants';
import {MLStatusBar} from './views'
import {actuatedNormalize} from '../controllers/utils';
import {Ionicons} from '@expo/vector-icons';

export default function ComingSoonScreen({ navigation }) {
  
  return (
    <>
        {Platform.OS == 'ios' && <MLStatusBar backgroundColor={colors.MLGreenAccent} barStyle="light-content" />}
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={24} color={colors.MLWhite} onPress={()=>navigation.goBack()} />
      </View>
      <View style={styles.mainView}>
      <Text style={{fontSize:actuatedNormalize(20)}}>Coming Soon!</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain'
  },
  header:{ 
    backgroundColor: colors.MLGreenAccent, 
    height: 35, 
    justifyContent:'center', 
    paddingLeft:15 
  },
  mainView:{
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
  }
});
