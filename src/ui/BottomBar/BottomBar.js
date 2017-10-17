// @flow

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import ItemActions from 'src/actions/ItemActions'

import Styles from './styles'

class BottomBar extends Component {
  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View style={Styles.background} >
        <Text style={Styles.barItem} ></Text>
        <Text style={Styles.barItem} ></Text>
        <Button title="Add Item" 
          onPress={()=>{navigate('NewItemModal')}}//this.props.dispatch(ItemActions.addItem("test"))} 
          style={Styles.barItem} />
      </View>
    )
  }
}

BottomBar = connect()(BottomBar)

export default BottomBar