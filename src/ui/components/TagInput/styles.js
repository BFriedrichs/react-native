// @flow 

import React from 'react'
import { StyleSheet } from 'react-native'

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
    margin: 4,
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
    borderRadius: 8
  },
  tag: {
    margin: 4,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: Colors.LightGrey
  },
  chosenTag: {
    backgroundColor: Colors.Pink
  },
  inputStyle: {
    color: Colors.FontGrey,
    height: 40,
    borderBottomColor: Colors.Input,
    borderBottomWidth: 1
  },
  disabled: {
    backgroundColor: Colors.Disabled
  }
})