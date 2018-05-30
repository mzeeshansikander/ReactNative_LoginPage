import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Logo from '../components/logo';
import Form from '../components/form';


export default class Login extends Component<{}> {
render(){
return (

      <View style = {styles.container}>
      <Logo/>
      <Form/>



      </View>
    )
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
