import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AppTabNavigator } from './components/AppTabNavigator'
import SignInScreen from './screens/SignInScreen'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import EnglishScreen from './screens/EnglishScreen'
import MathScreen from './screens/MathScreen'
import ScienceScreen from './screens/ScienceScreen'
import AppStackNavigator from './components/AppStackNavigator'


export default function App() {
  return (
    <SafeAreaProvider>
   
   <AppContainer/>
  
   </SafeAreaProvider>
  );
}
const switchNavigator = createSwitchNavigator({
  SignInScreen:{screen: SignInScreen},
  // BottomTab:{screen: AppStackNavigator},
  Drawer:{screen: AppDrawerNavigator},
})
const AppContainer =  createAppContainer(switchNavigator);
