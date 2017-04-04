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

import metrics from '../themes/Metrics'
const height = (metrics.screenWidth/3)
const width = metrics.screenHeight*2/3
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
export default class GridView extends Component {
  constructor(props) {
    super(props)
    const data = props.children || []

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }

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
          enableEmptySections={true}
          initialListSize={30}
        />
      </View>
    )
  }

  _renderRow (rowData, sectionId, rowId) {
    const imgSource = { uri: rowData.image }
    var name = rowData.base_name

    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this._selectItem(rowData)}
        underlayColor='rgba(0,0,0,0)'>
        <View style={styles.rowComponent}>
          <Image style={styles.thumb} source={imgSource} />
          <Text style ={{
            flex:0.5,
            fontSize:18,
            textAlign:'center',
            paddingLeft:10,
            paddingRight:10,
            color:'black'
          }}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _selectItem (item) {
    // do something with item
    this.props.onItemPress(item)
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  list: {
    backgroundColor:'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    width: (width/5)-30,
    height: width/4+30,
    margin:10
  },
  rowComponent: {
    width: (width/5)-30,
    height: width/4+30,
    alignItems: 'center'
  },
  thumb: {
    flex:0.75,
    width: (width/7),
    height: (width/7),
    resizeMode: 'contain'
  }
})
