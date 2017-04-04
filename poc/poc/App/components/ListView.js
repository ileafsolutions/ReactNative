import React, { Component } from 'react'
import {
  AppRegistry,
  ListView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
export default class ListViewRows extends Component {
  constructor(props) {
    super(props)
    this._renderRow = this._renderRow.bind(this)
    this._selectItem = this._selectItem.bind(this)
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={ds.cloneWithRows(this.props.children)}
          renderRow={this._renderRow}
          initialListSize={30}
        />
      </View>
    )
  }

  _renderRow (rowData, sectionId, rowId) {
    let id = ++rowId
    const name = rowData.base_name
    const price = rowData.price
    const qty = rowData.qty

    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this._selectItem(rowData)}
        underlayColor='rgba(0,0,0,0)'>
        <View style={styles.row}>
          <Text style ={{fontSize:18,textAlign:'center',flex:0.1,marginRight:5,color:'black'}}>{id}</Text>
          <Text style ={{fontSize:18,textAlign:'left',flex:0.9,color:'black'}}>{name}</Text>
          <Text style ={{fontSize:18,textAlign:'center',flex:0.1,marginLeft:5,color:'black'}}>{qty}</Text>
          <Text style ={{fontSize:18,textAlign:'center',flex:0.2,marginLeft:15,color:'black'}}>{price}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _selectItem (item) {
    // do something with item
    //this.props.addToCart(item)
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 0,
    flex: 1,
    backgroundColor: 'white'
  },
  list: {
    backgroundColor:'white',
    flexDirection: 'column',
    paddingTop: 8,
  },
  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width:null,
    alignItems: 'center'
  }
})
