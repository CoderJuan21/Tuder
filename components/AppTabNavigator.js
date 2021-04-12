import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import TutorFinderScreen from '../screens/TutorFinderScreen'
import {AppStackNavigator} from './AppStackNavigator'


export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/homeicon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
  TutorFinder:{
    screen:TutorFinderScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/tutoricon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Tutor Finder",
    }
  }
})
