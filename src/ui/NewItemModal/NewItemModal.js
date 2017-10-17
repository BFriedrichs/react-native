// @flow

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

export default class NewItemModal extends Component {
  render() {
    const { navigate } = this.props.navigation

    return(
      <View>
        <Text>Add your Item</Text>
      </View>
    )
  }
}