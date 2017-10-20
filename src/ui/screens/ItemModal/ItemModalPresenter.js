// @flow

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux'

import Styles from './styles'

import ItemActions from 'src/actions/ItemActions'
import Colors from 'src/ui/Colors'

import TagInput from 'src/ui/components/TagInput'

class ItemModal extends Component {

  item = this.props.navigation.state.params.item
  state: {
    itemName: string,
    tags: Array<string>
  } = {
      itemName: this.item && this.item.name || '',
      tags: this.item && this.item.tags || []
  }

  tagInput: TagInput

  render() {
    const { goBack } = this.props.navigation

    return(
      <View style={Styles.wrapper}>
        <View style={Styles.nameInput} >
          <FormLabel>Item Name</FormLabel>
          <FormInput
            inputStyle={Styles.inputStyle}
            onChangeText={(text: string) => this.setState({itemName: text})}
            value={this.state.itemName}/>
        </View>
          
        <View >
          <TagInput 
            name={'Tags'}
            tags={this.props.tags}
            currentTags={this.state.tags}
            ref={(tagInput) => { this.tagInput = tagInput }}
          />
        </View>
        <Button
          large
          icon={{name: 'check-circle'}}
          backgroundColor={Colors.Blue}
          title={this.item ? 'UPDATE' : 'ADD'}
          style={Styles.submitButton}
          disabled={this.state.itemName == '' ? true : false}
          onPress={()=>{
            const data: ItemData = {
              name: this.state.itemName,
              tags: this.tagInput.state.currentTags
            }

            this.props.addTags(data.tags)
            if(this.item) {
              this.props.updateItem(this.item.id, data)
            } else {
              this.props.addItem(data)
            }

            goBack()
          }}
          />
      </View>
    )
  }
}

export default ItemModal