// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Styles from './styles'

export default class Tag extends Component {
  render() {
    return (
      <View style={Styles.tag} >
        <Text style={Styles.text} >{this.props.text}</Text>
      </View>
    )
  }
}