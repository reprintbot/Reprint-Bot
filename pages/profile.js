import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from './assets/logo.png';


export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.BtnHome}>
          <Text style={styles.loginText}>Home</Text>
        </TouchableOpacity>
      <Text style = {styles.Title}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dafff7',
    justifyContent: 'flex-start',
  },
  Title: {
    textAlign: "center",
    fontWeight:"bold",
    fontSize:50,
    color:"#b087e6"
  },
  Btn:{
    width:"60%",
    backgroundColor:"#b087e6",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  BtnHome:{
    width:60,
    height:50,
    backgroundColor:"#b087e6",
    borderRadius:20,
    margin:20,
    justifyContent: 'center',
    textAlign: 'center'
  }
});
