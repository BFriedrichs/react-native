// @flow 

import React from 'react'
import { Platform, StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
  },
  inputWrapper: {

  },
  addButton: {
    position: 'absolute',
    right: 0,
    margin: 4
  },
  addButtonTag: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: Colors.Pink
  },
  tagContainer: {
    marginTop: 8,
    padding: 4,
    borderColor: Colors.LightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 4
  },
  tag: {
    margin: 4,
    padding: 16,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    backgroundColor: Colors.LightGrey
  },
  chosenTag: {
    backgroundColor: Colors.Pink
  },
  inputStyle: {
    color: Colors.FontGrey,
    ...Platform.select({
      ios: {
        borderBottomColor: Colors.Input,
        borderBottomWidth: 1,
        height: 40
      },
      android: {
        height: 50
      }
    })
  },
  disabled: {
    backgroundColor: Colors.Disabled
  }
})