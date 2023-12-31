import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
//import { useNavigation } from '@react-navigation/native'

export default function App() {

  //const navigation = useNavigation();

  const handlePress = () => {


    //navigation.navigate('AnotherScreen');

  };


  return (
    <View style={styles.container}>

      <Text style={styles.greetingText}>Welcome to {'\n'} pizza list!</Text>

      <Image style={styles.imagePrimary} source={require('./assets/initial-photo.jpg')} />

      <TouchableOpacity style={styles.buttonMainScreen} onPress={handlePress}>
        <Text style={styles.buttonMainScreenText}>Go to catalog</Text>
      </TouchableOpacity>

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
  },

  buttonMainScreen: {
    position: 'absolute',
    bottom: '7%',
    left: '15%',
    zIndex: 2,
    resizeMode: 'cover',

    width: '70%',
    backgroundColor: '#d4bc7f',
    borderRadius: 999
  },

  buttonMainScreenText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    paddingTop: 7,
    paddingBottom: 8,

  },

  greetingText: {
    fontWeight: '600',
    position: 'absolute',
    fontSize: 28,
    top: '10%',
    left: '7%',
    zIndex: 2,
  }


});

