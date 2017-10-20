// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import Styles from './styles'

import ItemList from 'src/ui/components/ItemList'
import BottomBar from 'src/ui/components/BottomBar'

import TagInput from 'src/ui/components/TagInput'

export default class Main extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <ItemList 
          navigation={this.props.navigation}
        />
        <BottomBar 
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
