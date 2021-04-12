import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import { AntDesign } from '@expo/vector-icons';
import NotificationScreen from '../screens/NotificationScreen'
import SettingScreen from '../screens/SettingScreen'
import HomeScreen from '../screens/HomeScreen'
import EnglishScreen from '../screens/EnglishScreen'
import ScienceScreen from '../screens/ScienceScreen'
import MathScreen from '../screens/MathScreen'

export const AppDrawerNavigator=createDrawerNavigator({
   Home:{
    screen:AppTabNavigator,
    navigationOptions:{
      drawerIcon:<AntDesign name="home" color="#ffc34b" size={24}/>
    }
  },
  English:{
    screen:EnglishScreen,
    navigationOptions:{
      drawerIcon:<AntDesign name="book" color="#ffc34b" size={24}/>
    }
  },
  Science:{
    screen:ScienceScreen,
    navigationOptions:{
      drawerIcon:<AntDesign name="book" color="#ffc34b" size={24}/>
    }
  },
  Math:{
    screen:MathScreen,
    navigationOptions:{
      drawerIcon:<AntDesign name="book" color="#ffc34b" size={24}/>
    }
  },
  Notifications:{
    screen:NotificationScreen,
    navigationOptions:{
      drawerIcon:<AntDesign name="notification" color="#ffc34b" size={24}/>
    }
  },
  Settings:{
    screen:SettingScreen,
    navigationOptions:{
      drawerIcon:<AntDesign name="setting" color="#ffc34b" size={24}/>
    }
  },
},{
contentComponent:CustomSideBarMenu
},{
  initialRouteName:"Home"
})