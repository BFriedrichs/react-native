// @flow

import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-swipeable'

import Styles from './styles'

import Colors from 'src/ui/Colors'

import Item from 'src/models/Item'
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
    const item = this.props.item

    return (
      <Swipeable rightContent={this.deleteButton}>
        <View style={Styles.listItem}>
          <View>
            <Text>{item.count}x</Text>
            <Text style={Styles.text}>
              {item.name}
            </Text>
          </View>
          <TouchableOpacity onPress={this.props.onIncreaseClick.bind(this, item.name)} >
            <IonIcon name="ios-add-circle-outline" size={30} color={Colors.Blue} />
          </TouchableOpacity>
        </View>
      </Swipeable>
    )
  }
}

export default class ItemList extends Component {
  renderItem(element: {item: Item}) {
    return (
      <ItemListItem 
        item={element.item} 
        onIncreaseClick={this.props.onIncreaseClick}
      />
    )
  }
  

  keyExtractor(item: Item, index: number) {
    return item.id
  }

  render() {
    return (
      <FlatList 
        data={this.props.items}
        extraData={this.props.items}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

