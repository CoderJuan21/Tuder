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
import HomeScreen from './HomeScreen'
import {AppTabNavigator} from '../components/AppTabNavigator'

export default class SignInScreen extends Component{
  constructor(){
    super();
    this.state={
       emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
            isModalVisible:'false'
    }
  }
   userSignUp = (emailId, password,confirmPassword) =>{
   if(password !== confirmPassword){
       return Alert.alert("password doesn't match\nCheck your password.")
   }else{
     firebase.auth().createUserWithEmailAndPassword(emailId, password)
     .then(()=>{
       db.collection('users').add({
         first_name:this.state.firstName,
         last_name:this.state.lastName,
         contact:this.state.contact,
         email_id:this.state.emailId,
         address:this.state.address,
       })
       return  Alert.alert(
            'User Added Successfully',
            '',
            [
              {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
            ]
        );
     })
     .catch((error)=> {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       return Alert.alert(errorMessage)
     });
   }
 }

 

 userLogin = (emailId, password)=>{
   firebase.auth().signInWithEmailAndPassword(emailId, password)
   .then(()=>{
     this.props.navigation.navigate('Home')
   })
   .catch((error)=> {
     var errorCode = error.code;
     var errorMessage = error.message;
     return Alert.alert(errorMessage)
   })
 }

 showModal = ()=>{
  return(
  <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.isModalVisible}
    >
    <View style={styles.modalContainer}>
      <ScrollView style={{width:'100%'}}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Text
          style={styles.modalTitle}
          >Registration</Text>
           <Text style={styles.label}> First Name </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
         <Text style={styles.label}> Last Name </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
         <Text style={styles.label}> Contact </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
         <Text style={styles.label}> Address </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
         <Text style={styles.label}> Email-Address </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />
         <Text style={styles.label}> Password </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
         <Text style={styles.label}> Confirm Password </Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Confrim Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({"isModalVisible":false})}
          >
          <Text style={{color:'#ff5722'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  </Modal>
)
}



 render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>

        </View>
          {
            this.showModal()
          }
        <View style={{justifyContent:'center', alignItems:'center'}}>
         
          <Text style={styles.title}>Tuder</Text>
        </View>
        <View>
               <Text style={styles.labelLogin}> Email-Address </Text>
            <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
                 <Text style={styles.labelLogin}> Password </Text>
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:20}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           onPress={()=>this.setState({ isModalVisible:true})}
           >
           <Text style={styles.buttonText}>SignUp</Text>
         </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#9ab7d3',
   alignItems: 'center',
   justifyContent: 'center'
 },
 
 title :{
   fontSize:45,
   marginLeft:0,
   fontWeight:'700',
   paddingBottom:30,
   color : 'black'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:35,
   color:'orange',
   margin:50,
   fontWeight:500,
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'black',
   borderRadius:15,
   borderWidth:2,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:2,
   borderRadius:15,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'600',
   fontSize:20
 },
  label:{
    color:"red",
    fontWeight:"bold",
  },
  labelLogin:{
    alignSelf:'center',
    color:"black",
    fontWeight:"bold",
  }
})


