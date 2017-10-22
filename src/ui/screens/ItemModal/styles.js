// @flow 

import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1, 
    flexDirection: 'column', 
    justifyContent: 'center'
  },
  scrollItem: {
    margin: 16,
    paddingBottom: 16,
    backgroundColor: Colors.White,
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
    elevation: 3
  },
  inputStyle: {
    color: Colors.FontBlack
  },
  countItem: {
    marginTop: 20
  },
  countWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  countView: {
    position: 'absolute',
    right: 20,
    top: 13
  },
  countViewTag: {
    backgroundColor: Colors.Blue,
    paddingLeft: 16,
    paddingRight: 16
  },
  submitButtonContainer: {
    marginLeft: 0,
    marginRight: 0
  },
  submitButton: {
    height: 56
  },
  modalContent: {
    backgroundColor: Colors.White,
    padding: 18
  }
})