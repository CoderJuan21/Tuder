import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import EnglishScreen from '../screens/EnglishScreen';
import MathScreen from '../screens/MathScreen';
import ScienceScreen from '../screens/ScienceScreen';
import HomeScreen from '../screens/HomeScreen'

export const AppStackNavigator=createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  EnglishScreen:{
    screen:EnglishScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  MathScreen:{
    screen:MathScreen,
     navigationOptions:{
      headerShown:false
    }
  },
   ScienceScreen:{
    screen:ScienceScreen,
     navigationOptions:{
      headerShown:false
    }
  },
  
},
{
  initialRouteName:"Home"
})