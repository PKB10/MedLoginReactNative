import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants';
import { actuatedNormalize } from '../../controllers/utils';

    export const MLHeader = (props) => {
    return (
        <View style={styles.container}>
            <View style={{...styles.container, padding: 0}}>
            <Ionicons name="reorder-three" color={'white'} size={28} onPress={()=>props.navigation.toggleDrawer()}/>
            <Text style={styles.text}>{props.title}</Text>
            </View>
            <FontAwesome name="search" color={'white'} size={24} onPress={()=>props.navigation.navigate('ComingSoonScreen')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.MLGreenAccent,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15
    },
    text:{
        fontSize: actuatedNormalize('20'),
        color: colors.MLWhite,
        textAlign: 'center',
        marginLeft:30
    }
})
