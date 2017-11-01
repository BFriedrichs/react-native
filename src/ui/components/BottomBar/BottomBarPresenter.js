// @flow

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import Styles from './styles'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FoundationIcon from 'react-native-vector-icons/Foundation'

import I18n from 'src/locales'

export default class BottomBarPresenter extends Component {
  state = {
    isOpening: false
  }

  render() {
    const { navigate } = this.props.navigation
    const itemCount = this.props.items.length
    const filteredItemCount = this.props.filteredItems.length
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
        <View style={Styles.textContainer}>
          <Text 
            style={Styles.textItem}
          >
            {itemCount} {itemCount == 1 ? I18n.t('item') : I18n.t('items')}
          </Text>
          <Text 
            style={Styles.textItem}
          >
            ({itemCount - filteredItemCount} {I18n.t('hidden')})
          </Text>
        </View>
        <TouchableOpacity 
          disabled={this.state.isOpening ? true : false}
          onPress={()=>{
            this.setState({isOpening: true})
            navigate('ItemModal', {title: I18n.t('newItem')})
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