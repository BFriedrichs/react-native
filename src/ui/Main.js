// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ItemList from './ItemList';
import Item from '../models/Item';
import ItemStore from '../stores/ItemStore';

export default class Main extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  state = {
    items: ItemStore.getItems()
  }
  i = 1
  buttonPress() {
    this.i+=1
    ItemStore.storeItem(new Item('test' + this.i));
    this.setState({items: ItemStore.getItems()});
  }

  render() {
    const { navigate } = this.props.navigation
  
    return (
      <View>
        <Button
          title="Add Item!"
          onPress={this.buttonPress.bind(this)}
        />

        <ItemList
          data={this.state.items}
        />
      </View>
    );
  }
}
