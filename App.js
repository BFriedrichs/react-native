// @flow

import React from 'react'
import { AppState, AsyncStorage, StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducer from 'src/reducers'

import Main from 'src/ui/screens/Main'
import ItemModal from 'src/ui/screens/ItemModal'
import History from 'src/ui/screens/History'

const store = createStore(Reducer)

export default class App extends React.Component {
  state = {
    isStoreLoading: false,
    store: store
  }

  componentWillMount() {
    var self = this

    // AsyncStorage.setItem('completeStore', '') // Reset all

    AppState.addEventListener('change', this._handleAppStateChange.bind(this))
    this.setState({isStoreLoading: true})
    AsyncStorage.getItem('completeStore').then((value)=>{
      if(value && value.length){
        let initialStore = JSON.parse(value)
        let newStore = createStore(Reducer, initialStore)

        if (module.hot) {
          // Enable Webpack hot module replacement for reducers
          (module.hot: any).accept('./src/reducers', () => {
            const nextRootReducer = require('./src/reducers/index')
            newStore.replaceReducer(nextRootReducer)
          })
        }

        self.setState({store: newStore})
      } else {
        self.setState({store: store})
      }
      self.setState({isStoreLoading: false})
    }).catch((error)=>{
      self.setState({store: store})
      self.setState({isStoreLoading: false})
    })
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this))
  }

  _handleAppStateChange(currentAppState) {
    let storingValue = JSON.stringify(this.state.store.getState())
    AsyncStorage.setItem('completeStore', storingValue)
  }

  render() {
    if(!this.state.isStoreLoading) {
      return (
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
      )
    }
    return <View />
   
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