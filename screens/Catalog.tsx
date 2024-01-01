import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { dataPiza } from '../data/catalog.piza'


const Catalog = () => {
  return (
    <View style={styles.container}>
      <Text>Catalog</Text>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
});


export default Catalog;