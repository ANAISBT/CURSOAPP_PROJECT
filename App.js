import * as firebase from 'firebase'

import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './src/component/auth/Landing';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RegisterScreen from './src/component/auth/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';

if(firebase.apps.lenght===0){
  firebase.initializeApp(firebaseConfig)
}

const Stack= createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});