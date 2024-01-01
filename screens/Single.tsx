import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { dataPiza } from '../data/catalog.piza'
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';


const Single = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
      
      <Text>
          single
      </Text>
          

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

});


export default Single;