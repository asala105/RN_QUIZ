import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Component3 from './component3';
import MyText from './MyText';

function Component2() {
    return ( 
        <View style={styles.container}>
            <View style={styles.container2}>
                <MyText text="Balance"/>
            </View>
        </View>
        );
}

export default Component2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2:{
        flex:1,
        backgroundColor: '#f4f5fb',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderTopRightRadius:30,
    }
});