// @flow

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import Styles from './styles'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FoundationIcon from 'react-native-vector-icons/Foundation'

export default class BottomBar extends Component {
  state = {
    isOpening: false
  }

  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View style={Styles.background} >
        <TouchableOpacity 
          onPress={this.props.toggleSideMenu}
        >
          <FoundationIcon 
            name="filter" 
            size={32} 
            style={Styles.barItem}
             />
        </TouchableOpacity>
        <Text style={Styles.barItem} ></Text>
        <TouchableOpacity 
          disabled={this.state.isOpening ? true : false}
          onPress={()=>{
            this.setState({isOpening: true})
            navigate('ItemModalModal', {title: 'New Item'})
            // disable the button for a bit so it cant be spam clicked
            setTimeout(() => this.setState({isOpening: false}), 200)
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