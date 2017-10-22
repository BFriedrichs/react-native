// @flow

import React, { Component } from 'react'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'

import Styles from './styles'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import ItemList from 'src/ui/components/ItemList'
import BottomBar from 'src/ui/components/BottomBar'
import SideMenu from 'src/ui/components/SideMenu'
import FilterMenu from 'src/ui/components/FilterMenu'


export default class Main extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Shoptastic',
    headerRight: (
      <TouchableOpacity
        onPress={()=>{ navigation.navigate('History') }}
      >
        <MaterialIcon 
          name='history'
          size={30}
          style={Styles.navButton} />
      </TouchableOpacity>
    )
  })

  state = {
    isSideMenuVisible: false
  }

  toggleSideMenu() {
    this.setState({isSideMenuVisible: !this.state.isSideMenuVisible})
  }

  render() {
    StatusBar.setBarStyle('dark-content', true)
    
    return (
      <View style={Styles.wrapper}>
        <View style={Styles.sideMenuWrapper}>
          <SideMenu
            title='FILTER'
            menu={(<FilterMenu />)}
            visible={this.state.isSideMenuVisible}
            onBackdropPress={this.toggleSideMenu.bind(this)}
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
