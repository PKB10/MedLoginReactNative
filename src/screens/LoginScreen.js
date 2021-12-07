/*!
 @file LoginScreen.js

 @brief LoginScreen 
 @discussion This file contains the login form screen, it is the first screen on the stack

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {windowWidth, services, colors} from '../constants';
import {actuatedNormalize} from '../controllers/utils';
import {MLButton, MLStatusBar} from './views'
import {sendPOSTRequest} from '../controllers/utils/MLAxiosUtilities';//importing POST function
import {getUserSession, saveUserSession} from '../controllers/utils/MLSharedPreferences'

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState('')// for initiliazing state
  const [password, setPassword] = useState('')// for initiliazing state

  const login = async () => {
    const requestBody = {
      "username": email, 
      "password": password
    }
    await sendPOSTRequest(services.login, requestBody).then((res)=>{
      if(res.status==200){
      saveUserSession(res.data.user)
      navigation.reset({
        index:0,
        routes:[{name:'Drawers'}]
      })
      }else{
        alert(res.data.error)
      }
    }).catch((error)=>{
      console.log("Error:",error)
    })
  }

  const showComingSoon = async () => {
    navigation.navigate('ComingSoonScreen')
  }


  useEffect(()=>{ //screen load function
    setTimeout(() => {
    getUserSession(async(user) => { //  check user exists
      if(user==undefined || user==null){
        
      }else{
        navigation.reset({
          index:0,
          routes:[{name:'Drawers'}]
        })
      }
    })
  }, 1000)
  },[])


  return (
    <>
        {Platform.OS == 'ios' && <MLStatusBar backgroundColor={colors.MLGreenAccent} barStyle="light-content" />}
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: colors.MLGreenAccent, height: 35 }}>
        <Text style={styles.headerText}>MedLogin</Text>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 15 }}>
        <Text style={styles.text}>Welcome to MedLogin</Text>
        <Text style={{ fontSize: actuatedNormalize(22), marginTop: 20 }}>Sign in to continue</Text>
      </View>
      <View style={styles.inputView}>
        <View style={styles.row}>
          <TextInput
            value={email}
            autoCapitalize='none'
            placeholderTextColor={colors.MLTextColor}
            placeholder={'Username'}
            onChangeText={setEmail}// for setting state
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            secureTextEntry
            autoCapitalize='none'
            value={password}
            placeholderTextColor={colors.MLTextColor}
            placeholder={'Password'}
            onChangeText={setPassword}// for setting state
            style={styles.input}
          />
        </View>
        <Text style={styles.forgotText} onPress={showComingSoon}>Forgot Password?</Text>
        <View style={{ alignSelf: 'center', marginVertical: '5%' }}>
          <MLButton
            text={'Submit'}
            backgroundColor={colors.MLGreenAccent}
            buttonHeight={52}
            borderRadius={4}
            borderColor={colors.MLGreenAccent}
            width={windowWidth * 0.9}
            textColor={colors.MLWhite}
            onPress={login}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%' }}>
          <Text>Do not have an account?</Text>
          <Text style={{ ...styles.text, fontSize: actuatedNormalize(18) }}  onPress={showComingSoon}>Contact Admin</Text>
        </View>

      </View>
    </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain',
  },
  headerText: {
    marginLeft: 10,
    color: colors.MLWhite,
    fontSize: actuatedNormalize(18),
    fontWeight: 'bold'
  },
  text: {
    color: colors.MLBlue,
    fontSize: actuatedNormalize(32),
    fontWeight: 'bold'
  },
  inputView: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: actuatedNormalize(18),
    borderRadius: 4,
    borderColor: colors.MLTextColor,
    borderWidth: 1,
    width: windowWidth * 0.90,
    marginVertical: 10
  },
  forgotText: {
    fontSize: actuatedNormalize('16'),
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.MLBlue
  }
});
