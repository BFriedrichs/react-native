// @flow 

import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'src/ui/Colors'

const imageWidth = 90

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.Input,
    textAlign: 'center'
  },
  arrow: {
    width: imageWidth,
    height: imageWidth * 0.74,
    position: 'absolute',
    right: 14,
    bottom: 10
  }
})