// @flow

import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  background: {
    backgroundColor: '#f1f1f1',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    padding: 13,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  barItem: {
    height: 56,
    color: Colors.Blue
  }
})