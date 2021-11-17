import React from 'react';
import {View, StyleSheet} from 'react-native';

function Component3() {
    return ( 
        <View style={styles.container}>
            <View style={styles.fixedRatio}></View>
        </View>
    );
}

export default Component3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        maxHeight:60,
        margin:30,
    },
    fixedRatio: {
        backgroundColor:'#0f1c22',
        flex: 1,
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
        shadowOffset:{
            width:5,
            height:10
        },
        shadowOpacity: 0.1,
        shadowRadius:15,
        shadowColor:"#0f1c22"
    },

});