import React from 'react'
import {Text, View, PixelRatio} from 'react-native';

function MyText(props) {
    return ( 
        <View style={{ marginHorizontally:3, flex:1, alignItems: 'center', justifyContent: 'center', fontSize:24, fontWeight: 'bold' }}>
        <Text style={{ fontSize:20, fontWeight: '600' }}>{props.text}</Text>
        </View>
     );
}

export default MyText;