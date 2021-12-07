import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import PatientsScreen from '../../screens/PatientsScreen';

const Drawer = createDrawerNavigator();
export default function Drawers() {//contains only one screen - PatientsScreen
    return (
        <Drawer.Navigator initialRouteName="PatientsScreen" screenOptions={{headerShown: false}}  drawerContent={ props => <DrawerContent {...props} />}> 
        <Drawer.Screen name="PatientsScreen" component={PatientsScreen}/>
      </Drawer.Navigator>
    )
}