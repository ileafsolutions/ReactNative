import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  InteractionManager,
  TouchableOpacity,Modal,ActivityIndicator
} from 'react-native';
import {connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import styles from './styles/RootContainerStyles'
import metrics from '../themes/Metrics'
import MenuList from '../components/MenuList'
import Billing from '../components/Billing'
import images from '../images';
import colors from '../themes/colors';


class CounterContainer extends Component {
  constructor(props){
    super(props)
    console.log("PROPS",props);
    console.log(styles.container);
    this._renderModal = this._renderModal.bind(this)
  }

  componentWillMount(){
    InteractionManager.runAfterInteractions(() => {
      // ...long-running synchronous task...
      this.props.apiToFetch()
    });
  }

  render() {
    console.log("PROPS",this.props.cartList);
    console.log("LOADER",this.props.loading);
    console.log(metrics.screenWidth);
    return (
      <View>
        <View style = {styles.toolbarstyle} >

          <Image style = {styles.toolbarmenuicon} source = {images.menu}/>

          <Text style = {styles.toolbarText}>MAIN OUTLET</Text>
          <Image style = {styles.toolbarsearch} source = {images.search}/>
          <Image style = {styles.toolbardownarrow} source = {images.downarrow}/>
        </View>

        <View style={styles.container}>
          <View style = {{
            width:(metrics.screenHeight*2/3),
            height:metrics.screenWidth,
            backgroundColor:'white',
            borderRightColor: '#EFEFEF',
            borderRightWidth:2,
          }}>
            <MenuList
            itemsList={this.props.itemsList}
            onItemPress={(item)=>{this.props.addToCart(item)}}
            />
          </View>
          <View style = {{
            height:(metrics.screenWidth===1024)?metrics.screenWidth:metrics.screenWidth - 130,
            width:(metrics.screenHeight*1/3),
            backgroundColor:'white'
          }}>
            <Billing cartList={this.props.cartList}/>
          </View>
        </View>
        {this._renderModal()}
      </View>
    );
    }
    _renderModal(){
      console.log("isLoading",this.props.loader);
      if(this.props.loader){
      const spinner = (
        <View
           style={{flex: 1,backgroundColor: "#000000BF" }}
           key={`spinner_${Date.now()}`}>
        <ActivityIndicator
             style={{ flex: 1 }}
             color='black'
           />
        </View>
      );

    return(
    <View style={{flex:1,width:metrics.screenHeight,height:metrics.screenWidth,backgroundColor:'#0000002F',position:"absolute"}}>
    <Modal
            style={{flex:1}}
            onRequestClose={() => this.close()}
            transparent>
              {spinner}
            </Modal>
            </View>)
    }else{

      <View/>
    }
    }
}
function mapDispatchForProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch);
}


export default connect((state)=>{
  return{
    cartList:state.addToCartReducer,
    loader:state.loader,
    itemsList:state.itemsList
  }},
  mapDispatchForProps)(CounterContainer)
