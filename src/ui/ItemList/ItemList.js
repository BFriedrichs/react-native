// @flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Styles from './styles'

import Item from '../../models/Item';

class ItemListItem extends Component {
  render() {
    return (
      <View style={Styles.listItem}>
        <Text style={Styles.text}>
          {this.props.data.name}
        </Text>
      </View>
    );
  }
}

export default class ItemList extends Component {
  renderItem(item: {item: Item}) {
    return (
      <ItemListItem data={item.item} />
    )
  }

  keyExtractor(item: Item, index: number) {
    return item.id
  }

  render() {
    return (
      <FlatList 
        data={this.props.data}
        extraData={this.props.data.map(e=>e.id)}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

