// @flow

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import StackModalNavigator from './StackModalNavigator'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducer from 'src/reducers'

import Main from 'src/ui/screens/Main'
import ItemModal from 'src/ui/screens/ItemModal'

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

const AppNavigator = StackModalNavigator({
  Home: { screen: Main },
  ItemModal: { 
    screen: ItemModal
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})
