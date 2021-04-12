//import React,{Component, useState}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button,
    ScrollView} from 'react-native';
import db from '../config';
import * as firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import * as WebBrowser from 'expo-web-browser'
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';


export default function TutorFinderScreen (){
 const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.google.com');
    setResult(result);
  };
  return (
    <View style={styles.container}>
     <Text style={{flex:0.1, justifyContent:'center',fontWeight:'bold', color:"#ffc34b", width:400, textAlign:'center', fontSize:20, backgroundColor:"#ffd39b", marginTop:-330, marginBottom:200,height:10}}> Tutor Finder </Text>
      <Button title="Search in WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4f3f5',
  },
  // header:{
  //   backgroundcolor: '#066f71', 
  //   fontSize:20,
  //   fontWeight:"bold",
  //   width:330,
  // }
});
