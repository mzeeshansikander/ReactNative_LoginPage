/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import   Login   from './src/pages/login';



export default class App extends Component<{}> {
  render() {
    return (
      <View style = {styles.container}>
      <StatusBar
        backgroundColor = "#37474F"
        barStyle= "light-content"
        />

        <Login/>




      </View>

    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#00897B',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'



  }

});
