// @flow

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Main from './src/ui/Main/Main'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  Home: {
    screen: Main
  }
});
