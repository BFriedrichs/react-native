// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Styles from './styles'

export default class BottomBar extends Component {
  render() {
    return (
      <View style={Styles.background} >
        <Text style={Styles.barItem} ></Text>
        <Text style={Styles.barItem} ></Text>
        <Button title="Add Item" onPress={this.props.handleAddButtonClicked} style={Styles.barItem} />
        
      </View>

    )
  }
}
