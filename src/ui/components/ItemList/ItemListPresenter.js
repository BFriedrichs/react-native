// @flow

import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-swipeable'
import * as Animatable from 'react-native-animatable';

import Styles from './styles'

import Colors from 'src/ui/Colors'

import Tag from '../Tag'
import Item from 'src/models/Item'
import IonIcon from 'react-native-vector-icons/Ionicons'

class ItemListItem extends Component {
  deleteButton = (
    <TouchableHighlight style={Styles.deleteButton}>
      <Text style={[Styles.text, Styles.deleteText]}>Delete</Text>
    </TouchableHighlight>
  )

  render() {
    const item = this.props.item

    // extra View for shadow because of: https://github.com/facebook/react-native/issues/14868
    return (
      <Animatable.View 
        style={Styles.listItemWrapper}
        animation="slideInRight"
        ref="animatable"
        duration={500} 
      > 
        <View style={Styles.shadow}>
          <Swipeable 
            rightContent={this.deleteButton}
            onSwipeStart={this.props.setLock.bind(true)}
            onSwipeRelease={this.props.setLock.bind(false)}
            onRightActionRelease={() => {
              this.refs.animatable.zoomOutUp(800)
              this.refs.animatable.transitionTo({marginTop: -100}, 800)
              setTimeout(() => {
                this.props.deleteItem(item.id)
              }, 800)
            }}
            style={{ overflow: 'hidden' }}
          > 
            <TouchableOpacity
              onPress={this.props.editItem}
            >
              <View style={Styles.listItem}>
                <Tag 
                  style={[Styles.count, {width: (`${item.count}`.length * 25)}]} 
                  font={Styles.countText} 
                  text={`${item.count}`} />
                <View style={{flex: 1, paddingRight: 8}}>
                  <Text color={Colors.FontGrey} style={Styles.text}>
                    {item.name}
                  </Text>
                  <View style={[Styles.tagsWrapper, {display: item.hasTags() ? 'flex' : 'none'}]} >
                    <Text style={Styles.tags} >
                    {
                      item.hasTags() && item.tags.reduce((e1, e2) => 
                        e1 + ' · ' + e2
                      )
                    }
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity onPress={this.props.onIncreaseClick.bind(this, item.id)} >
                    <IonIcon name="ios-add-circle-outline" size={32} color={Colors.Blue} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Swipeable>
        </View>
      </Animatable.View>
    )
  }
}

export default class ItemList extends Component {
  state = {
    isLocked: false
  }

  setLock(event: any, state: any) {
    this.setState({isLocked: state.numberActiveTouches != 0})
  }

  editItem(item: Item) {
    const { navigate } = this.props.navigation

    navigate('ItemModalModal', {title: 'Edit Item', item: item})
  }

  renderItem(element: {item: Item}) {
    return (
      <ItemListItem 
        deleteItem={this.props.deleteItem}
        editItem={this.editItem.bind(this, element.item)}
        item={element.item} 
        setLock={this.setLock.bind(this)}
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
        scrollEnabled={!this.state.isLocked}
        data={this.props.items}
        extraData={this.props.items}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

