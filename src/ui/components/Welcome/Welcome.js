// @flow

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import * as Animatable from 'react-native-animatable'

import Styles from './styles'

export default class Welcome extends Component {
  render() {
    return (
      <Animatable.View animation='fadeIn' style={Styles.container}>
        <Text style={Styles.welcomeText}>
          To begin your new shopping experience add your first item!
        </Text>
        <Image 
          style={Styles.arrow}
          source={require('src/assets/arrow.png')}
        />
      </Animatable.View>
    )
  }
}