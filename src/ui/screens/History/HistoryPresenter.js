// @flow

import React, { Component } from 'react'
import { Platform, Alert, FlatList, TouchableOpacity, TouchableHighlight, StatusBar, Button, View, Text } from 'react-native'
import { HeaderBackButton } from 'react-navigation'
import * as Animatable from 'react-native-animatable';

import Colors from 'src/ui/Colors'

import IonIcon from 'react-native-vector-icons/Ionicons'

import Item from 'src/models/Item'

import Styles from './styles'

import I18n from 'src/locales'

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
            navigate('ItemModal', { title: I18n.t('addFromHistory'), item: {...item, count: 1 }, buttonTitle: I18n.t('addAgain'), backKey: state.key })
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
                  I18n.t('deleteItemTitle'),
                  I18n.t('deleteItemText', {itemName: item.name}),
                  [
                    {text: I18n.t('cancel'), onPress: () => {}},
                    {text: I18n.t('yes'), onPress: () => {
                      this.deleteItem(item)
                    }}
                  ]
                )
              }}
            >
              <Animatable.View animation='flipInX' style={Styles.deleteButton}>
                <Text style={Styles.deleteText}>{I18n.t('delete')}</Text>
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
      title: I18n.t('history'),
      headerTintColor: Colors.White,
      headerStyle: {
        backgroundColor: Colors.Blue
      },
      headerLeft: (
        <HeaderBackButton 
          title={I18n.t('back')}
          tintColor={Colors.White}
          onPress={() => {
            StatusBar.setBarStyle('dark-content', true)
            navigation.goBack()
          }}
        />
      ),
      headerRight: (
        Platform.select({
          ios: (
            <Button
              title={params.editButton || I18n.t('edit')}
              color={Colors.White}
              tintColor={Colors.White}
              onPress={() => params.toggleEditMode()}
            />
          ),
          android: (
            <TouchableOpacity
              onPress={() => params.toggleEditMode()}
            >
              <Text style={Styles.androidHeaderButton}>{params.editButton || I18n.t('edit')}</Text>
            </TouchableOpacity>
          ),
        })
       
      )
    }
  }

  state = {
    editing: false
  }

  toggleEditMode() {
    this.setState({ editing: !this.state.editing })
    this.props.navigation.setParams({ editButton: this.state.editing ? I18n.t('edit') : I18n.t('done') }) 
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

