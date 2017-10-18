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
      itemName: '',
      storeName: ''
  }

  render() {
    const { goBack } = this.props.navigation

    return(
      <View style={Styles.wrapper}>
        <View style={Styles.nameInput} >
          <FormLabel>Item Name</FormLabel>
          <FormInput
            inputStyle={Styles.inputStyle}
            onChangeText={(text) => this.setState({itemName: text})}
            value={this.state.itemName}/>
        </View>
        <View style={Styles.nameInput} >
          <FormLabel>Store Name</FormLabel>
          <FormInput
            inputStyle={Styles.inputStyle}
            onChangeText={(text) => this.setState({storeName: text})}
            value={this.state.storeName}/>
        </View>
        <Button
          large
          icon={{name: 'check-circle'}}
          backgroundColor={Colors.Blue}
          title='SUBMIT'
          style={Styles.submitButton}
          disabled={this.state.itemName == '' ? true : false}
          onPress={()=>{
            let data = {}
            if(this.state.storeName != '') {
              data.stores = this.state.storeName.split(' ')
            }

            this.props.dispatch(ItemActions.addItem(this.state.itemName, data))
            goBack()
          }}
          />
      </View>
    )
  }
}

NewItemModal = connect()(NewItemModal)

export default NewItemModal