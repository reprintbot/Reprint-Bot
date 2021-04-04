import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Home from './home';
import logo from './assets/logo.png';


export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
      <Image source={logo} style={styles.logoImage} />
      <Text>Welcome Back!</Text>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.loginText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.loginText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.loginText}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dafff7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage:{
    width: 200, 
    height: 200,
    marginBottom: 10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
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
  loginText:{
    color:"white"
  }
});
