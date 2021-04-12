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

export default class NotificationScreen extends Component{
  render(){
    return(
     <View style={{ flex: 1 }}>
     <MyHeader title="Notifications Screen" navigation={this.props.navigation}/>
              <Text style={styles.testText}>No Notifications</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
testText:{
  textAlign:'center',
 fontWeight:'bold',
 marginTop:100
}
})
