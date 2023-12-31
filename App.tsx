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
    backgroundColor: '#fff'
  },

   buttonMainScreenText: {
       fontSize: 20,
       fontWeight: '500',
       textAlign: 'center',
       
   }


});

