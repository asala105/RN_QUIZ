import React from 'react';
import {View, StyleSheet} from 'react-native';
import Component1 from './Component1';
import Component2 from './Component2';

function Component() {
    return ( 
        <View style={styles.container}>
            <Component1/>
            <Component2/>
        </View>
    );
}

export default Component;

const styles = StyleSheet.create({
    container: {
        width:'70%',
        // height: '25%',
        backgroundColor:'#fff',
        borderRadius: 20,
        overflow: 'hidden',
        aspectRatio:1.5,
        shadowOffset:{
            width:5,
            height:10
        },
        shadowOpacity: 0.1,
        shadowRadius:10,
        shadowColor:"#fff"
    },
});