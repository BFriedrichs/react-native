// @flow

import React, { Component } from 'react';
import { ScrollView, Keyboard, Text, TouchableHighlight, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';

import Styles from './styles'

import ItemActions from 'src/actions/ItemActions'
import Colors from 'src/ui/Colors'

import TagInput from 'src/ui/components/TagInput'

class ItemModal extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  tagInput: TagInput
  item = this.props.navigation.state.params.item
  state: {
    itemName: string,
    tags: Array<string>
  } = {
      itemName: this.item && this.item.name || '',
      tags: this.item && this.item.tags || []
  }

  keyboardTiming = 250
  keyboardWillShowListener: any
  keyboardWillHideListener: any
  
  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  keyboardWillShow (e: any) {
    this.refs.keyboardDummy.transitionTo({height: e.endCoordinates.height}, this.keyboardTiming, 'ease-out')
  }

  keyboardWillHide () {
    this.refs.keyboardDummy.transitionTo({height: 0}, this.keyboardTiming, 'ease-out')
  }

  render() {
    const { goBack } = this.props.navigation

    return(
      <View style={Styles.wrapper}>
        <View style={Styles.wrapper}>
          <ScrollView>
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
          </ScrollView>
          <Button
            large
            icon={{name: 'check-circle'}}
            backgroundColor={Colors.Blue}
            title={this.item ? 'UPDATE' : 'ADD'}
            buttonStyle={Styles.submitButton}
            containerViewStyle={Styles.submitButtonContainer}
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
              Keyboard.dismiss()
              goBack()
            }}
            />
        </View>
        <Animatable.View style={{height: 0}} ref='keyboardDummy' />
      </View>
    )
  }
}

export default ItemModal