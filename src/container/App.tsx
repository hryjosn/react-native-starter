
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'

function App(): JSX.Element {
  const backgroundStyle = {
    height: '100%',
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ flex: 1 }} />
      <Button
        onPress={() => {
          console.log('clicked')
        }}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        title="click me"
      />
    </SafeAreaView>
  )
}

export default App
