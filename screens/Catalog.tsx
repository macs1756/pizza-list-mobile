import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { dataPiza } from '../data/catalog.piza'
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Catalog: undefined
  Home: undefined
  Single: undefined
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Single'>;
};


const Catalog: React.FC<HomeScreenProps> = ({ navigation }) => {

  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [navigation])

  return (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
             <Image style={styles.pizzaImageLoading} source={ require('../assets/catalog/1.jpg') } />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.pb40}>
            {dataPiza.map((e, i) => (
              <View key={e?.title + i} style={styles.catalogItem}>
                <View style={styles.pizzaImageWrapper}>
                  <Image style={styles.pizzaImage} source={e?.image} />
                </View>
                <Text style={styles.pizzaWeight}>{e?.weight + ' гр.'}</Text>
                <Text style={styles.pizzaTitle}>{e?.title}</Text>
                <View style={styles.gridBuyPizza}>
                  <Text style={styles.pizzaPrice}>{e?.price + 'грн'}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Single')}>
                    <Text style={styles.buttonBuy}>Купити</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <StatusBar style="dark" />
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 50,
  },


  catalogItem: {
    borderWidth: 2, // Border width
    borderColor: '#d4bc7f', // Border color
    borderRadius: 7,
    width: '100%',
    padding: 10,
    marginBottom: 20
  },

  pizzaWeight: {
    fontWeight: '700',
    color: '#98989d',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 2
  },

  pizzaTitle: {
    fontSize: 18,
    fontWeight: '500',
  },

  pizzaImageWrapper: {
    width: '100%',
    height: 320,
    position: 'relative',
  },

  pizzaImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 7,
  },
  pb40: {
    paddingBottom: 20
  },

  gridBuyPizza: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
  },

  pizzaPrice: {
    fontWeight: '700',
    fontSize: 28
  },

  buttonBuy: {
    borderRadius: 7,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#3aad49',
    color: '#fff',
    fontSize: 16
  },

  loadingContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  pizzaImageLoading: {
    width: '25%',
    height: '12.5%',
    borderRadius: 9999,
  }

});


export default Catalog;