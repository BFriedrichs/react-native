// @flow

import React, { Component } from 'react'
import { ScrollView, Keyboard, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class KeyboardAvoidingView extends Component {

  adjustable = this.props.adjustable || 0
  keyboardTiming = 250
  keyboardWillShowListener: any
  keyboardWillHideListener: any
  
  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow(e: any) {
    this.refs.keyboardDummy.transitionTo({height: e.endCoordinates.height - this.adjustable}, this.keyboardTiming, 'ease-out')
  }

  keyboardWillHide() {
    this.refs.keyboardDummy.transitionTo({height: 0}, this.keyboardTiming, 'ease-out')
  }

  render() {
    return(
      <View style={{flex: 1}}>
        {this.props.children}
        <Animatable.View style={{height: 0}} ref='keyboardDummy' />
      </View>
    )
  }
}