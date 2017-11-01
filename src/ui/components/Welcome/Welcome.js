// @flow

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import * as Animatable from 'react-native-animatable'

import Styles from './styles'

import I18n from 'src/locales'

export default class Welcome extends Component {
  render() {
    return (
      <Animatable.View animation='fadeIn' style={Styles.container}>
        <Text style={Styles.welcomeText}>
          {I18n.t('greeting')}
        </Text>
        <Image 
          style={Styles.arrow}
          source={require('src/assets/arrow.png')}
        />
      </Animatable.View>
    )
  }
}