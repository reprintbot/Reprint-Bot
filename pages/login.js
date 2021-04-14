import * as React from 'react';
import { Button, View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.logo}>Reprint Bot</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <Button
            onPress={() => navigation.navigate('Home')}
            title="Forgot Password?"
            color="#57068c"
        />
        <Button
            onPress={() => navigation.navigate('Home')}
            title="LOGIN"
            color="#151515"
        />
        <Button
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
            title="Sign up"
            color="#57068c"
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#57068c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#ffffff",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#ffffff"
  }
});
