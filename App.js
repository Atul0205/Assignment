import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Registration from './components/Registration';
import Data from './components/Data';


const Navigator = createStackNavigator({
  Home:{
    screen:Home
    },
    About:
    {
      screen:About
    },
    Error:
    {
      screen:Error
    },
    Registration:{
      screen:Registration
    },
    Data:{
      screen:Data
    }
  
});


const App= createAppContainer(Navigator);
export default App;