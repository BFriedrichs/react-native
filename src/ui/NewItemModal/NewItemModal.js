// @flow

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux'

import Styles from './styles'

import ItemActions from 'src/actions/ItemActions'
import Colors from '../Colors'

class NewItemModal extends Component {

  static navigationOptions = {
    title: 'New Item'
  }

  state = {
      itemName: ''
  }

  render() {
    const { goBack } = this.props.navigation

    return(
      <View style={Styles.wrapper}>
        <View style={Styles.nameInput} >
          <FormLabel>Item Name</FormLabel>
          <FormInput
            onChangeText={(text) => this.setState({itemName: text})}
            value={this.state.itemName}/>
        </View>
        <Button
          large
          icon={{name: 'check-circle'}}
          backgroundColor={Colors.Blue}
          title='SUBMIT'
          disabled={this.state.itemName == '' ? true : false}
          onPress={()=>{
            this.props.dispatch(ItemActions.addItem(this.state.itemName))
            goBack()
          }}
          />
      </View>
    )
  }
}

NewItemModal = connect()(NewItemModal)

export default NewItemModal