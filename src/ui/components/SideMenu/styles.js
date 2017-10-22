// @flow 

import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

import Colors from 'src/ui/Colors'

const dim = Dimensions.get('window')

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  animationWrapper: {
    width: dim.width * 0.7,
    marginLeft: -dim.width * 0.7
  },
  sidebar: {
    paddingLeft: dim.width * 0.1,
    flex: 1,
    backgroundColor: Colors.White,
    flexDirection: 'column',
    borderRightWidth: 1,
    borderRightColor: '#d2d1d2'
  },
  children: {
    width: '100%'
  },
  title: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.FontLightGrey
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: dim.height,
    width: dim.width * 0.4
  }
})