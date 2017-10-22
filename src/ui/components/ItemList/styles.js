// @flow 

import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  listItemWrapper: {
    margin: 8,
    marginBottom: 0,
  },
  shadow: {
    backgroundColor: '#f1f1f1',
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
    elevation: 3
  },
  listItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White
  },
  text: {
    color: Colors.FontGrey,
    fontSize: 24
  },
  button: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LightGrey
  },
  actionText: {
    color: Colors.White,
    fontSize: 24,
    padding: 8
  },
  count: {
    minWidth: 50,
    height: 50, 
    marginRight: 16,
    backgroundColor: Colors.Pink
  },
  countText: {
    fontSize: 32, 
    textAlign: 'center'
  },
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tags: {
    color: Colors.FontLightGrey,
    fontSize: 12
  }
})