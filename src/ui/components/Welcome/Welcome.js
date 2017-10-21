// @flow

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import Styles from './styles'

export default class Welcome extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcomeText}>
          To begin your new shopping experience add your first item!
        </Text>
        <Image 
          style={Styles.arrow}
          source={require('src/assets/arrow.png')}
        />
      </View>
    )
  }
}