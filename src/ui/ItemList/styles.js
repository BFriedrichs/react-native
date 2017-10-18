// @flow 

import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  listItem: {
    backgroundColor: '#f1f1f1',
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  text: {
    color: Colors.FontGrey,
    fontSize: 20
  },
  deleteButton: {
    backgroundColor: Colors.Red,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  deleteText: {
    color: Colors.White
  }
})