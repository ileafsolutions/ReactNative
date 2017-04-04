import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';
import colors from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection:'row'
    //  borderColor:'red',
    //  borderWidth:2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    //  borderColor:'red',
    //  borderWidth:2
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
    //  borderColor:'red',
    //  borderWidth:2
  },
  flexOnly:{
    flex:1,
    flexDirection:'row',
  //  borderColor:'red',
  //  borderWidth:2
  },tileScreenItem:{
    flex:1,
    flexDirection:'row',
    width:Metrics.screenWidth/2,
    justifyContent:'center',
    alignItems:'center',
    //  borderColor:'red',
    //  borderWidth:2
  },
  toolbarstyle : {
    height:64,
    paddingTop:10,
    backgroundColor: colors.colors_bill_bg,
    borderBottomColor:colors.colors_bill_bg,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10
  },
  toolbarmenuicon : {
    height:32,
    width:32,
    marginRight:15,
    resizeMode:'contain'
  },
  toolbarText : {
    flex:1,
    color:'white',
    fontSize:19
  },
  toolbarsearch : {
    height:22,
    width:22,
    resizeMode:'contain'
  },
  toolbardownarrow : {
    height:32,
    width:32,
    marginLeft:15,
    resizeMode:'contain'
  }
})
