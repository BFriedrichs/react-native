// @flow

import React, { Component } from 'react'
import { Keyboard, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'

import TagInput from '../TagInput'

import Styles from './styles'

const dim = Dimensions.get('window')

export default class SideMenuPresenter extends Component {
  componentDidUpdate() {
    if(this.props.visible) {
      this.refs.sidebar.transitionTo({marginLeft: -dim.width * 0.1}, 400, 'ease-in-out-back')
    } else {
      Keyboard.dismiss()
      this.refs.sidebar.transitionTo({marginLeft: -dim.width * 0.7}, 400, 'ease-in-out-back')
    }
  }

  render() {
    const backdrop = this.props.onBackdropPress && this.props.visible ? (
      <TouchableWithoutFeedback
        style={[Styles.backdrop]}
        onPress={this.props.onBackdropPress}>
        <View style={Styles.backdrop} />
      </TouchableWithoutFeedback>
    ) : null

    return(
      <View style={Styles.wrapper}>
        <Animatable.View ref='sidebar' style={Styles.animationWrapper}>
          <View style={Styles.sidebar}>
            <Text style={Styles.title}>{this.props.title}</Text>
            {this.props.menu}
          </View>
        </Animatable.View>
        <View style={Styles.children}>
          {this.props.children}
          {backdrop}
        </View>
      </View>
    )
  }
}