// @flow

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducer from 'src/reducers'

import Main from 'src/ui/screens/Main'
import ItemModal from 'src/ui/screens/ItemModal'
import History from 'src/ui/screens/History'

const store = createStore(Reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

const AppNavigator = StackNavigator({
  Home: { screen: Main },
  ItemModal: { screen: ItemModal },
  History: { screen: History }
}, {
  headerMode: 'float',
  initialRouteName: 'Home'
})
