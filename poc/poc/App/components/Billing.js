import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import metrics from '../themes/Metrics'
import ListView from '../components/ListView'
import colors from '../themes/colors';
import images from '../images';

export default class Billing extends React.Component{

  render(){
    var responseData = this.props.cartList;
    console.log("responseData",responseData);
    var price=0;
    responseData.map( (item,index)=> {
      price = price + (item.price * item.qty);
      return item;
    });
    return(
      <View style ={{
        flex:1,
        flexDirection:'column',
        //paddingBottom:63,


      }}>
        <View style ={{flex:2,marginRight:10 }}>
          {this.renderifStatement(responseData.length)}
        </View>
        <View style ={{
          flex:1,
        //  justifyContent:'flex-end',
        }}>
          {this.renderBillRow('Sub Total', price)}
          {this.renderBillRow('Add Discount', '2%')}
          {this.renderBillRow('No Tax', '0.00')}
          {this.renderBillRow('Total', price)}
          {this.renderButton('PAY', '$ '+price)}
        </View>
      </View>
    )
  }

  renderifStatement(length){
    if(length==0){
      return(
        <View style = {{flex:1,padding:100,alignItems: 'center',justifyContent:'center'}}>
          <Text style = {{fontSize:16,textAlign:'center'}}>Search or use quick keys to add a product to your sale</Text>
        </View>
      )
    }else{
      return(
      <ListView>{this.props.cartList}</ListView>
    )
    }
  }
  renderBillRow(text,value){
    return(
      <View style ={{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: colors.colors_bill_bg,
        paddingLeft:15,
        paddingRight:15,
        borderBottomColor:colors.color_border_line,
        borderBottomWidth:2,
      }}>
        <Text style = {{
          flex:1,
          fontSize:20,
          color:text=='Add Discount' ? colors.color_discount_text : colors.color_bill_text,
        }}>{text}</Text>
        <Text style = {{
          flex:1,
          fontSize:20,
          color:text=='Add Discount' ? colors.color_discount_text : colors.color_bill_text,
          textAlign:'right'
        }}>{value}</Text>
      </View>
  )
  }

  renderButton(text,value){
    return(
      <View
        style ={{
          backgroundColor: colors.colors_button_bg,
          paddingLeft:10,
          paddingRight:10,
          height:85,
      }}>
        <Image
          style = {{
            flex:1,
            flexDirection:'row',
            width:(metrics.screenHeight/3)-20,
            resizeMode:'stretch',
            marginTop:15,
            marginBottom:15,
            alignItems:'center'
        }}
          source = {images.btn_bg}>

          <Text style = {{
            flex:0.65,
            fontSize:22,
            color:'white',
            borderRightColor:'#7CB938',
            borderRightWidth:1,
            marginLeft:10,
            backgroundColor:'transparent',
            fontWeight: 'bold',
          }}>{text}</Text>

          <Text style = {{
            flex:0.35,
            fontSize:22,
            color:'white',
            textAlign:'right',
            marginRight:20,
            backgroundColor:'transparent',
            fontWeight: 'bold',
          }}>{value}</Text>

        </Image>
      </View>
  )
  }
}
