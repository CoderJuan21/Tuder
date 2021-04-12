import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert,Image} from 'react-native';
import db from '../config'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default class MyHeader extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
    }
  }

render(){
  return (
    <Header
  leftComponent={ <FontAwesome name="bars" size={24} color="black"  onPress={()=>this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: this.props.title, style: { color: '#066f71', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#f7e1d3"
    />
  )
}
}


