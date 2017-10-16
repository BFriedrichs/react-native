// @flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';

import Styles from './styles';

import Colors from '../Colors';

import Item from '../../models/Item';
import IonIcon from 'react-native-vector-icons/Ionicons'

class ItemListItem extends Component {
  deleteButton = (
    <TouchableHighlight>
      <View style={[Styles.listItem, Styles.deleteButton]} >
        <Text style={[Styles.text, Styles.deleteText]}>Delete</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    const storedItem = this.props.data;

    return (
      <Swipeable rightContent={this.deleteButton}>
        <View style={Styles.listItem}>
          <View>
            <Text>{storedItem.count}x</Text>
            <Text style={Styles.text}>
              {storedItem.item.name}
            </Text>
          </View>
          <TouchableOpacity onPress={this.props.handleIncreaseButtonClicked.bind(this, storedItem.item.id)} >
            <IonIcon name="ios-add-circle-outline" size={30} color={Colors.Blue} />
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  }
}

export default class ItemList extends Component {
  renderItem(element: {item: {item: Item, count: number}}) {
    return (
      <ItemListItem 
        data={element.item} 
        handleIncreaseButtonClicked={this.props.handleIncreaseButtonClicked}
      />
    );
  }

  keyExtractor(storedItem: {item: Item}, index: number) {
    return storedItem.item.id;
  }

  render() {
    return (
      <FlatList 
        data={this.props.data}
        extraData={this.props.data.map(e=>e.item.id)}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

