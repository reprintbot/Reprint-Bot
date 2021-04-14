import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: '#ffffff', //Set Header color
            },
            headerTintColor: '#57068c', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              textAlign: 'center', //Set Header text align
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#57068c', //Set Header color
            },
            headerTintColor: '#ffffff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile', //Set Header Title
            headerStyle: {
              backgroundColor: '#57068c', //Set Header color
            },
            headerTintColor: '#ffffff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
