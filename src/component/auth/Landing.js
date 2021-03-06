import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
        <Button title='Register' onPress={()=> navigation.navigate("Register")}/>
        <Button title='Login' onPress={()=> navigation.navigate("Login")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})
