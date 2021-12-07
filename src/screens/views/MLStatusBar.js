import React from 'react'
import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native'

export const MLStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[ { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);