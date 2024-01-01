import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { dataPiza } from '../data/catalog.piza'


const Catalog = () => {
  return (
    <View style={styles.container}>

      {
        dataPiza.map((e, i) => (
          <View key={e?.title + i} style={styles.catalogItem}>

            <View style={styles.pizzaImageWrapper}>
              
            </View>

            <Text style={styles.pizzaWeight}>{e?.weight + ' гр.'}</Text>
            <Text style={styles.pizzaTitle}>{e?.title}</Text>
          </View>
        ))
      }


      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 20,
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
    height: 150
  }

});


export default Catalog;