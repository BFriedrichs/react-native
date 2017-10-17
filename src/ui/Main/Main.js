// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import Styles from './styles'

import ItemList from '../ItemList'
import BottomBar from '../BottomBar'

export default class Main extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <ItemList />
        <BottomBar 
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
