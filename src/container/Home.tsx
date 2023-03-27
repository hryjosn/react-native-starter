import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native'

import rootStore from '~/store'

function Home(): JSX.Element {
  const backgroundStyle = {
    height: '100%',
  }
const {
        homeStore: { page, text },
    } = rootStore
  return (
    <SafeAreaView style={backgroundStyle}>
        <Text>{text}</Text>
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

export default Home
