// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import Styles from './styles'

import ItemList from 'src/ui/components/ItemList'
import BottomBar from 'src/ui/components/BottomBar'
import SideMenu from 'src/ui/components/SideMenu'
import FilterMenu from 'src/ui/components/FilterMenu'

export default class Main extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  state = {
    isSideMenuVisible: false
  }

  toggleSideMenu() {
    this.setState({isSideMenuVisible: !this.state.isSideMenuVisible})
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <View style={Styles.sideMenuWrapper}>
          <SideMenu
            title='Filter'
            menu={(<FilterMenu />)}
            visible={this.state.isSideMenuVisible}
          >
            <ItemList
              navigation={this.props.navigation}
            />
          </SideMenu>
          
        </View>
        
        <BottomBar
          toggleSideMenu={this.toggleSideMenu.bind(this)}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
