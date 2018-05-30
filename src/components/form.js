import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity

} from 'react-native';

export default class Form extends Component <{}>{
  render(){
    return (
      <View style = {styles.container}>

      <TextInput style={styles.inputBox}
       underlineColorAndroid ='rgba(0,0,0,0)'
       placeholder="Email"
       placeholderTextColor="#ffffff"

       />

       <TextInput style={styles.inputBox}
        underlineColorAndroid ='rgba(0,0,0,0)'
        placeholder="Password"
        placeholderTextColor="#ffffff"
        />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Login</Text>

        </TouchableOpacity>



      </View>

    )
  }

}
const styles = StyleSheet.create({
  container : {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  inputBox:{
    width:300,
    paddingHorizontal: 20,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    marginVertical:10,
    width:300,
    backgroundColor: '#37474F',
    borderRadius: 25,
    paddingVertical:12
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color:'#ffffff'


  }



});
