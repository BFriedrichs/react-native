// @flow 

import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  sideMenuWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  navButton: {
    marginRight: 12, 
    color: Colors.Blue
  }
})