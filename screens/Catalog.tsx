import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { dataPiza } from '../data/catalog.piza'


const Catalog = () => {
  return (
    <View style={styles.container}>

      {
        dataPiza.map((e, i)=>(
          <View key={e?.title + i} style={styles.catalogItem}>
            <Text>{e?.title}</Text>
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
  }
});


export default Catalog;