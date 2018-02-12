import React from 'react';
import { ImageBackground, StatusBar, Image, StyleSheet } from 'react-native';
import { Switch } from 'react-native-elements';

const styles = StyleSheet.create({
  /* Containers */
  cardContainer: {
    backgroundColor: '#000',
  },

  profileContainer: {},

  infoContainer: {},

  /* Other Styling */
  cardTitle: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  cardTimeStamp: {
    fontSize: 30,
  },

  cardPersonImage: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 50,
  },

  cardPresenter: {},
});

const date = new Date();
let timeStamp = date.getDay() + ':' + date.getMonth() + 1 + ':' + ':' + date.getFullYear();

const Card = props => (
  <View style={styles.cardContainer}>
    <View style={styles.profileContainer}>
      <Text style={styles.cardTitle}>React Native & Firebase workshop!</Text>
      <Text style={styles.cardTimeStamp}>Current data: {timeStamp}</Text>
      <Image style={styles.cardPersonImage} uri={'http://lorempixel.com/200/200/cats/'} />
      <Text style={styles.cardPresenter}></Text>
    </View>
    <View style={styles.infoContainer}>
      <Switch disabled="true" />
    </View>
  </View>
);

export default Card;
