import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './pages/login';
import Splash from './pages/splash';
import Home from './pages/home';
import Profile from './pages/profile';
import Settings from './pages/settings';
import History from './pages/history';

export default function App(){
  return (
    <Home/>
    /*<Splash />
    <Login />
    <Profile />
    <Settings />
    <History />*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
