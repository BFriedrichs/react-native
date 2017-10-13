// @flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Item from '../models/Item';

class ItemListItem extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.text}>
          {this.props.data.description}
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

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
});