import React from 'react'
import {Scene, Router} from 'react-native-router-flux';
import MainContainer from '../containers/MainContainer'
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native'

export default class NavigationRouter extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
    <View style = {{flex:1}}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content' />
      <Router>
        <Scene key="root">
          <Scene
            key="MainContainer"
            title='MAIN OUTLET'
            hideNavBar
            component={MainContainer}
          />
        </Scene>
      </Router>
    </View>)
  }
}
