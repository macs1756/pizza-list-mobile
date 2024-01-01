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
  return (
    <ScrollView style={styles.container}>
      <View style={styles.pb40}>
        {
          dataPiza.map((e, i) => (
            <View key={e?.title + i} style={styles.catalogItem}>

              <View style={styles.pizzaImageWrapper}>
                <Image style={styles.pizzaImage} source={e?.image.toString()} />
              </View>

              <Text style={styles.pizzaWeight}>{e?.weight + ' гр.'}</Text>
              <Text style={styles.pizzaTitle}>{e?.title}</Text>

              <View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Single')}
                >
                  <Text>Go to catalog</Text>
                </TouchableOpacity>

              </View>

            </View>
          ))
        }


        <StatusBar style="dark" />
      </View>
    </ScrollView>
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
    paddingTop: 5,
    paddingBottom: 5
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
  }

});


export default Catalog;