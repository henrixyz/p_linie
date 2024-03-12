import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
// import { Teste } from './src/Text'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'download.png' }}
        style={{ width: 200, height: 200, resizeMode: 'contain' }}
      />
      <Text>teste</Text>
    </View>
    // Teste()
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
