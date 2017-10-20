// @flow

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import Styles from './styles'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FoundationIcon from 'react-native-vector-icons/Foundation'

class BottomBar extends Component {
  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View style={Styles.background} >
        <TouchableOpacity onPress={()=>{}} >
          <FoundationIcon 
            name="filter" 
            size={32} 
            style={Styles.barItem}
             />
        </TouchableOpacity>
        <Text style={Styles.barItem} ></Text>
        <TouchableOpacity 
          onPress={()=>{
            navigate('ItemModalModal', {title: 'New Item'})
          }} 
        >
          <MaterialIcon 
            name="playlist-add" 
            size={32} 
            style={Styles.barItem}
             />
        </TouchableOpacity>
      </View>
    )
  }
}

export default BottomBar