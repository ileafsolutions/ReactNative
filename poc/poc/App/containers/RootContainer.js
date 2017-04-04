import React, { Component } from 'react';
import NavigationRouter from '../router/NavigationRouter'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
export default class RootContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar
       //hidden={true}
       backgroundColor="black"
       barStyle="light-content"
      />
        <NavigationRouter/>
    </View>
    );
  }
}
