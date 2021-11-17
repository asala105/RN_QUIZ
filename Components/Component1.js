import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Component3 from './component3';
import MyText from './MyText';

function Component1() {
    return ( 
        <View style={styles.container}>
            <View style={styles.container2}>
                <Component3/>
                <MyText text="Name" />
                <Component3/>
            </View>
        </View>
    );
}

export default Component1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f5fb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2:{
        flexDirection:'row',
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        borderBottomLeftRadius:30,
    }
  });
  