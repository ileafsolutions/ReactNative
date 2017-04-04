import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import GridView from './GridView';

//var response = require('../response.json');

import styles from '../containers/styles/RootContainerStyles'
import images from '../images';
const BASE_SIZE = 30;
const RANDOM_FACTOR_MAX = 30;

export default class MenuList extends React.Component{

  constructor(props) {
     super(props);
     const itemCount = 10;
     const data = []
     this.state = {
     data: []
    }
   }

  render(){

    var responseData = this.props.itemsList;
    console.log("responseNewData",responseData);
    /*for (let i = 0; i < responseData.length; i++) {
      this.state.data.push({
        id: i,
        uri: responseData.products[i].image,
        name: responseData.products[i].base_name,
        price:responseData.products[i].price,
        qty:1,
      })
    }*/
    var grid = responseData.map((item,index)=>{
      var newItem = item;
      return {
        ...item,
        qty:1
      }
    })
    console.log("GRID",grid);
    //console.log("daata",this.state.data);
    return(
      <View style ={{
        flex:1,
        paddingBottom:65,
        flexDirection:'column',
        marginLeft:10,
        backgroundColor:'white'
      }}>
        <GridView onItemPress={(item)=>{this.props.onItemPress(item)}}>{grid}</GridView>
      </View>
    )
  }

}
