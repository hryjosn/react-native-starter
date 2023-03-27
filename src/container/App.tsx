
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'

import rootStore from '~/store'

function App(): JSX.Element {
  const backgroundStyle = {
    height: '100%',
  }
  const {
        homeStore: { page, text },
    } = rootStore

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ flex: 1 }} />
      <Button
        onPress={() => {
          console.log('clicked')
        }}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        title={text}
      />
    </SafeAreaView>
  )
}

export default App
