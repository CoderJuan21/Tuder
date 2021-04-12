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
    ImageBackground,
    ScrollView} from 'react-native';
import db from '../config';
import * as firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import * as WebBrowser from 'expo-web-browser'
import React, { useState } from 'react';
import Constants from 'expo-constants';

export default function EnglishScreen (){
 const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.google.com');
    setResult(result);
  };
  return (
    <View style={styles.container}>
    <ImageBackground
          source={require('../assets/englishbook.jpg')}
          style={{
            flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor: '#000',
          }}>
     <TouchableOpacity style={{width:340,backgroundColor:"#5b85bc",height:40,justifyContent:'center',fontSize:22, alignItems:'center', fontWeight:'bold', borderRadius:3, borderColor:"black", borderWidth:2,}}>English Tutors
      </TouchableOpacity>
            <TouchableOpacity style={{width:255,marginTop:200,backgroundColor:"#e37cff",height:40,justifyContent:'center',fontSize:22, alignItems:'center', fontWeight:'bold', borderRadius:3, borderColor:"black", borderWidth:2}} onPress={_handlePressButtonAsync}>Search For English Tutors
      </TouchableOpacity>
    
      <Text>{result && JSON.stringify(result)}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

