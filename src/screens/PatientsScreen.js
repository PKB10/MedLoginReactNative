/*!
 @file PatientsScreen.js

 @brief PatientsScreen 
 @discussion This file contains the patients list screen

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

 import React, {useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import moment from 'moment'
import {useSelector, useDispatch} from 'react-redux'
import {MLHeader, MLStatusBar } from './views'
import {services, colors} from '../constants';
import {savePatient} from '../redux/actions/session.actions'//importing reducer actions
import {sendGETRequest} from '../controllers/utils/MLAxiosUtilities';//importing GET function
import {getUserSession, deleteUserSession} from '../controllers/utils/MLSharedPreferences'//importing local data functions


export default function PatientsScreen({navigation}) {

  const state = useSelector(state => state.userSessionReducer)//get user redux state
  const {PatientsList,visible} = state
  const dispatch = useDispatch();

  useEffect(()=>{
    getPatients()
  },[])

  const getPatients = async()=>{
    getUserSession(async(user) => {
      const requestHeaders = {
          'userid': user.userid, 
          'sessiontoken': user.sessiontoken
      }
      await sendGETRequest(services.patients, requestHeaders).then((res)=>{
        if(res.status==200){
          dispatch(savePatient(res.data.patients)) //redux method
          }else{
            deleteUserSession()
            alert(res.data.error)
            navigation.reset({
              index:0,
              routes:[{name:'LoginScreen'}]
            })
          }
      }).catch((error)=>{
        console.log("Error:",error)
      })
    })
  }

  // Function to lay out each row
  const renderItem=(({item,index})=>{
    return(
      <View style={{backgroundColor:index%2==0 ? colors.MLBlue:colors.MLTealBlue, borderBottomWidth:1, paddingVertical:10, paddingLeft:20}}>
       <Text style={{color:colors.MLWhite, paddingTop:5}}>Name: {item?.name?.first} {item?.name?.last}</Text>
       <Text style={{color:colors.MLWhite, paddingTop:5}}>ID: {item?.wardnumber}</Text>
       <Text style={{color:colors.MLWhite, paddingTop:5}}>Gender: {item.gender}</Text>
       <Text style={{color:colors.MLWhite, paddingTop:5}}>DOB: {moment(item?.birthdate).format("YYYY-MM-DD")}</Text>
      </View>
    )
  })

  return (
    <>
        {Platform.OS == 'ios' && <MLStatusBar backgroundColor={colors.MLGreenAccent} barStyle="light-content" />}
    <SafeAreaView style={styles.container}>
      <MLHeader navigation={navigation} title={"Patient"}/>
      {visible && <ActivityIndicator animating={true} size={30} color={colors.MLGreenAccent} />}
      <FlatList
        data={PatientsList}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain'
  },
});
