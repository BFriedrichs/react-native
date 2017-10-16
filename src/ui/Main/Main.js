// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Styles from './styles'

import ItemList from '../ItemList';
import BottomBar from '../BottomBar';

import ItemActions from '../../actions/ItemActions'
import ItemStore from '../../stores/ItemStore';

export default class Main extends Component {

  static navigationOptions = {
    title: 'Home'
  }
  state = {
    items: ItemStore.getItems()
  }

  addItem() {
    ItemActions.addItemWithName('test');
    this.setState({items: ItemStore.getItems()});
  }
  increaseItemCount(itemId: string) {
    ItemActions.increaseCountForId(itemId);
    this.setState({items: ItemStore.getItems()});
  }

  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View style={Styles.wrapper}>
        <ItemList
          handleIncreaseButtonClicked={this.increaseItemCount.bind(this)}
          data={this.state.items}
        />

        <BottomBar
          handleAddButtonClicked={this.addItem.bind(this)}
        />
      </View>
    );
  }
}
