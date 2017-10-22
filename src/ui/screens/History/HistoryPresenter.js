// @flow

import React, { Component } from 'react'
import { StatusBar, Button, View, Text } from 'react-native'
import { HeaderBackButton } from 'react-navigation'

import Colors from 'src/ui/Colors'

import IonIcon from 'react-native-vector-icons/Ionicons'

import Styles from './styles'

export default class HistoryPresenter extends Component {

  static navigationOptions = ({ navigation }) => ({
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
    )
  })

  componentWillReceiveProps(nextProps: any) {
    const back = nextProps.navigation.goBack
    nextProps.navigation.goBack = (from) => {
      StatusBar.setBarStyle('dark-content', true)
      back(from)
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true)
    return(
      <View></View>
    )
  }
}

