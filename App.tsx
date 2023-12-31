import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.imagePrimary} source={require('./assets/initial-photo.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },

  imagePrimary: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  }
});

