import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from './Components/Component';

export default function App() {
  return (
    <View style={styles.container}>
      <Component/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1c22',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
