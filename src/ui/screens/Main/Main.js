// @flow

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Alert, StatusBar, View, Text, TouchableOpacity } from 'react-native'
import deepDiffer from 'react-native/Libraries/Utilities/differ/deepDiffer'
import * as Animatable from 'react-native-animatable';

import Colors from 'src/ui/Colors'
import Styles from './styles'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import ItemList from 'src/ui/components/ItemList'

import BottomBar from 'src/ui/components/BottomBar'
import SideMenu from 'src/ui/components/SideMenu'
import FilterMenu from 'src/ui/components/FilterMenu'

import FinishedItemActions from 'src/actions/FinishedItemActions'
import ItemActions from 'src/actions/ItemActions'

import { getCurrentItems } from 'src/util/helper'

class Main extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const addAllEnabled = params.items && params.items.length > 0
    return {
      title: 'Shoptastic',
      headerRight: (
        <View style={Styles.header}>
          <TouchableOpacity
            disabled={addAllEnabled ? false : true}
            style={{marginRight: 4}}
            onPress={()=>{ 
              Alert.alert(
                'Add Current Items',
                `Do you want to add all current Items to your History?`,
                [
                  {text: 'Cancel', onPress: () => {}},
                  {text: 'Yes', onPress: () => {
                    for(const item of params.items) {
                      params.addToHistory(item)
                      params.deleteItem(item.id)
                    }
                  }}
                ]
              )
            }}
          >
            <MaterialIcon 
              name='done-all'
              size={30}
              style={[Styles.navButton, {color: addAllEnabled ? Colors.Blue : Colors.LightGrey} ]} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{ navigation.navigate('History') }}
          >
            <MaterialIcon 
              name='history'
              size={30}
              style={Styles.navButton} />
          </TouchableOpacity>
        </View>
      )
    }
  }
    

  state = {
    isSideMenuVisible: false
  }

  componentWillReceiveProps(nextProps) {
    if(deepDiffer(nextProps.items, this.props.items)) {
      this.props.navigation.setParams({ items: nextProps.items })
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ 
      deleteItem: this.props.deleteItem, 
      addToHistory: this.props.addToHistory
    })
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

const mapStateToProps = state => {
  return {
    items: getCurrentItems(state.items, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: (id: string) => {
      dispatch(ItemActions.deleteItem(id))
    },
    addToHistory: (data: ItemData) => {
      dispatch(FinishedItemActions.addItem(data))
    }
  }
}

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default Main
