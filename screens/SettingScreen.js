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
    ScrollView} from 'react-native';
import db from '../config';
import * as firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize' 

export default class SettingsScreen extends Component{
  constructor(){
    super();
    this.state={
    firstName:'',
    lastName:'',
    contact:'',
    address:'',
    emailId:'',
    contactId:'',
    docId:'',
    }
  }
  getUserDetails(){
    var user = firebase.auth().currentUser;
    var email=user.email
    db.collection("users").where("email_Id", "==", email).get().then(snapshot=>{
      snapshot.forEach(doc=>{
        var data = doc.data()
        this.setState({
          emailId:data.email_Id,
          firstName:data.first_name,
          lastName:data.last_name,
          address:data.address,
          contact:data.contact,
          docId:doc.id,
        })
      })
    })
  }

  updateUserDetails=()=>{
    db.collection("users").doc(this.state.docId).update({
      "first_name":this.state.firstName,
       "last_name":this.state.lastName,
        "address":this.state.address,
         "contact":this.state.contact,
    })
    Alert.alert("Profile Updated Successfully")
  }
  componentDidMount(){
    this.getUserDetails
  }
  render(){
    return(
     <View styles={styles.container}>
<MyHeader title="Settings" navigation={this.props.navigation}/>
<View style={styles.formContainer}>
<Text style={styles.label}> First Name </Text>
  <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          containerStyle={{marginBottom:RFValue(25), marginTop:RFValue(30)}}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        />
        <Text style={styles.label}> Last Name </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          containerStyle={{marginBottom:RFValue(25), marginTop:RFValue(30)}}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value={this.state.lastName}
        />
        <Text style={styles.label}> Contact </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          containerStyle={{marginBottom:RFValue(25), marginTop:RFValue(30)}}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />
        <Text style={styles.label}> Address </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          containerStyle={{marginBottom:RFValue(50), marginLeft:RFValue(30)}}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value={this.state.address}
        />
<TouchableOpacity style={styles.button} onPress={()=>{this.updateUserDetails()}}>
<Text style={styles.buttonText}>Save</Text>
</TouchableOpacity>
</View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems:'center'
  },
  formTextInput:{
    width:'75%',
    height:35,
    alignSelf:'center',
    borderRadius:10,
    borderWidth:1.5,
    marginTop:20,
  padding:10
  },
  button:{
    width:'75%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"red",
    marginTop:20,
  },
  buttonText:{
    fontSize:25,
    fontWeight:'bold',
    color:"white"
  },
  label:{
    fontSize:RFValue(18),
    color:"blue",
    fontWeight:"bold",
   padding:RFValue(10),
   marginLeft:RFValue(20),
  }
})