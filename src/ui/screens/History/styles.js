// @flow 

import React from 'react'
import { Platform, StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  listItem: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 3,
    backgroundColor: Colors.White,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: {
          height: 3,
          width: 3
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  listContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  androidHeaderButton: {
    color: Colors.White,
    marginRight: 20,
    fontSize: 16
  },
  itemName: {
    fontSize: 20,
    color: Colors.FontGrey
  },
  deleteButton: {
    flex: 1,
    backgroundColor: Colors.Red,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center'
  },
  deleteText: {
    color: Colors.White,
    fontSize: 18
  }
})