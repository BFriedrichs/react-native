// @flow

import React, { Component } from 'react'
import { Alert, FlatList, TouchableOpacity, TouchableHighlight, StatusBar, Button, View, Text } from 'react-native'
import { HeaderBackButton } from 'react-navigation'
import * as Animatable from 'react-native-animatable';

import Colors from 'src/ui/Colors'

import IonIcon from 'react-native-vector-icons/Ionicons'

import Item from 'src/models/Item'

import Styles from './styles'

class HistoryItem extends Component {
  deleteItem(item: Item) {
    this.refs.item.zoomOutUp(800)
    this.refs.item.transitionTo({marginTop: -60}, 800)
    setTimeout(() => {
      this.props.deleteItem(item.id)
    }, 800)
  }

  render() {
    const { navigate, state } = this.props.navigation
    const item = this.props.item

    return (
      <TouchableOpacity
        onPress={() => {
          if(!this.props.editing) {
            navigate('ItemModal', { title: 'Add from History', item: {...item, count: 1 }, buttonTitle: 'ADD AGAIN', backKey: state.key })
          }
        }}
      >
        <Animatable.View ref='item' style={Styles.listItem}>
          <View style={Styles.listContent}>
            <Text style={Styles.itemName}>{item.name}</Text>
            <Text style={Styles.itemName}>{item.count}</Text>
          </View>
          {
          this.props.editing ? (
            <TouchableHighlight
              onPress={() => {
                Alert.alert(
                  'Delete Item',
                  `Do you really want to delete '${item.name}' from your History?`,
                  [
                    {text: 'Cancel', onPress: () => {}},
                    {text: 'Yes', onPress: () => {
                      this.deleteItem(item)
                    }}
                  ]
                )
              }}
            >
              <Animatable.View animation='flipInX' style={Styles.deleteButton}>
                <Text style={Styles.deleteText}>Delete</Text>
              </Animatable.View>
            </TouchableHighlight>
          ) : null
        }
        </Animatable.View>
    </TouchableOpacity>
    )
  }
}

export default class HistoryPresenter extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: 'History',
      headerTintColor: Colors.White,
      headerStyle: {
        backgroundColor: Colors.Blue
      },
      headerLeft: (
        <HeaderBackButton 
          title='Back'
          tintColor={Colors.White}
          onPress={() => {
            StatusBar.setBarStyle('dark-content', true)
            navigation.goBack()
          }}
        />
      ),
      headerRight: (
        <Button
        title={params.editButton || 'Edit'}
        color={Colors.White}
        tintColor={Colors.White}
        onPress={() => params.toggleEditMode()}
      />
      )
    }
  }

  state = {
    editing: false
  }

  toggleEditMode() {
    this.setState({ editing: !this.state.editing })
    this.props.navigation.setParams({ editButton: this.state.editing ? 'Edit' : 'Done' }) 
  }

  componentDidMount() {
    this.props.navigation.setParams({ toggleEditMode: this.toggleEditMode.bind(this) })
  }

  componentWillReceiveProps(nextProps: any) {
    const back = nextProps.navigation.goBack
    nextProps.navigation.goBack = (from) => {
      StatusBar.setBarStyle('dark-content', true)
      back(from)
    }
  }

  renderItem(element: {item: Item}) {
    const { item } = element

    return (
      <HistoryItem 
        editing={this.state.editing}
        navigation={this.props.navigation}
        deleteItem={this.props.deleteItem}
        item={item}
      />
    )
  }

  keyExtractor(item: Item) {
    return item.id
  }

  render() {
    StatusBar.setBarStyle('light-content', true)
    return(
      <FlatList
        data={this.props.items}
        extraData={this.props.items.map(item => {return item.id})}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={this.keyExtractor} 
      />
    )
  }
}

