import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView} from 'react-native';
import db from '../config';
import * as firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class HomeScreen extends Component{
  render(){
    return(
     <View style={{flex:1, backgroundColor:"#bdd0e4"}}>
    <MyHeader title="Home" navigation={this.props.navigation}/>
    <View styles={styles.buttons}>
             <TouchableOpacity onPress={() => { this.props.navigation.navigate('EnglishScreen')}}>
             <Image source={require("../assets/englishbook.jpg")} style={{width:100, height:70, alignSelf:'center',marginTop:10}}/>
           <Text style={styles.englishButtonText}>English Tutors</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => { this.props.navigation.navigate('MathScreen')}}>
 <Image source={require("../assets/mathbook.png")} style={{width:100, height:80, alignSelf:'center',marginTop:10}}/>
           <Text style={styles.mathButtonText}>Math Tutors</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => { this.props.navigation.navigate('ScienceScreen')}}>
<Image source={require("../assets/scienceicon.png")} style={{width:50, height:60, alignSelf:'center',marginTop:10}}/>
           <Text style={styles.scienceButtonText}>Science Tutors</Text>
</TouchableOpacity>
</View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  buttons:{
    backgroundColor:"green",
    width:50,
    borderColor:"red",
    borderWidth:2,
    marginLeft:100,
  alignItems:'center',
 fontWeight:'bold',
 marginTop:100
},
englishButtonText:{
 height:50,
  width:220,
   borderColor:"black",
    borderWidth:3,
    borderRadius:40,
  marginTop:10,
  alignSelf:'center',
  textAlign:'center',
  fontWeight:'bold',
  color:"black",
  fontSize:25,
   backgroundColor:"#232967",
},
mathButtonText:{
   height:50,
  width:220,
   borderColor:"black",
    borderWidth:3,
    borderRadius:40,
  marginTop:10,
  alignSelf:'center',
    backgroundColor:"#e23030",
  textAlign:'center',
  fontWeight:'bold',
  color:"#black",
  fontSize:25,
},
scienceButtonText:{
  height:50,
  width:220,
   borderColor:"black",
    borderWidth:3,
    borderRadius:40,
  marginTop:10,
  alignSelf:'center',
  backgroundColor:"#389252",
  textAlign:'center',
  fontWeight:'bold',
  color:"#black",
  fontSize:25,
},
})
