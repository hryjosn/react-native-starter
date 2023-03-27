import {
  SafeAreaView,
  Text,
} from 'react-native'

function Home(): JSX.Element {
  const backgroundStyle = {
    height: '100%',
  }

  return (
    <SafeAreaView style={backgroundStyle}>
        <Text>This is Login Page</Text>
    </SafeAreaView>
  )
}

export default Home
