// UI properties for Drawer and methods for Drawer actions (refresh/logout)

import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {FontAwesome } from '@expo/vector-icons';
import {useDispatch} from 'react-redux'
import {savePatient, displayVisible} from '../../redux/actions/session.actions'
import {sendGETRequest} from '../../controllers/utils/MLAxiosUtilities';
import {getUserSession,deleteUserSession} from '../../controllers/utils/MLSharedPreferences'
import {actuatedNormalize} from '../../controllers/utils';
import {services, colors} from '../../constants';

export default function DrawerContent({navigation}) {
  const dispatch = useDispatch();

  const getPatients = async()=>{
    dispatch(displayVisible())
    getUserSession(async(user) => {
      const requestHeaders = {
          'userid': user.userid, 
          'sessiontoken': user.sessiontoken
      }
      await sendGETRequest(services.patients, requestHeaders).then((res)=>{
        if(res.status==200){
          dispatch(savePatient(res.data.patients))
          navigation.navigate("PatientsScreen")
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

  const SubModule = ({icon,desc})=> (
    <View style={styles.subItemView}>
      <FontAwesome name={icon} size={20} color={colors.MLWhite} />
      <Text style={{...styles.text, marginLeft:10}}>{desc}</Text>
    </View>
  )
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <Text style={{
          color:colors.MLWhite, 
          fontSize:actuatedNormalize(22),
          marginBottom: 30
        }}>Welcome!</Text>
      <TouchableOpacity onPress={getPatients}>
      <SubModule icon={"retweet"} desc={"Refresh"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{ 
        deleteUserSession()
        navigation.reset({
          index:0,
          routes:[{name:'LoginScreen'}]
        })
        }}>
      <SubModule icon={"sign-out"} desc={"Log Out"}/>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.MLGreenAccent
  },
  innerView:{
    marginTop:30,
    marginHorizontal:15
  },
  text:{
    fontWeight:"bold",
    fontSize: actuatedNormalize('16'),
    color: colors.MLWhite
  },
  itemView:{
    flexDirection:'row',
    alignItems:'center',
    // marginHorizontal:10,
    marginTop:20
  },
  subItemView:{
    flexDirection:'row',
    alignItems:'center',
    // marginHorizontal:10,
    marginVertical:6
  },
  image:{
    height:80,
    width:80,
    marginRight:25,
    resizeMode:'contain'
  },
  iconStyle:{
    height:32,
    width:32,
    marginRight:15,
    resizeMode:'contain'
  },
  subText:{
    fontSize: actuatedNormalize('20'),
    marginVertical: 5,
    color: '#101820'
  },
  divider:{
    borderBottomWidth:0.8,
    marginVertical:'4%',
    borderBottomColor: '#8A8B8C'
  }
});