// @flow

import React, { Component } from 'react';
import { StatusBar, Picker, ScrollView, Keyboard, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Button, FormLabel, FormInput, Slider } from 'react-native-elements'
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal'
import { HeaderBackButton } from 'react-navigation'

import Styles from './styles'

import ItemActions from 'src/actions/ItemActions'
import Colors from 'src/ui/Colors'

import KeyboardAvoidingView from 'src/ui/components/KeyboardAvoidingView'
import TagInput from 'src/ui/components/TagInput'
import Tag from 'src/ui/components/Tag'

export default class ItemModalPresenter extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  tagInput: TagInput
  item = this.props.navigation.state.params.item
  state: {
    itemName: string,
    tags: Array<string>,
    count: number,
    isLocked: bool,
    modalVisible: bool
  } = {
      itemName: this.item && this.item.name || '',
      tags: this.item && this.item.tags || [],
      count: this.item ? this.item.count != null ? this.item.count : 1 : 1,
      isLocked: false,
      modalVisible: false
  }

  submitItem() {
    const { goBack, state } = this.props.navigation

    const data: ItemData = {
      name: this.state.itemName,
      tags: this.tagInput.state.currentTags,
      count: this.state.count
    }

    this.props.addTags(data.tags)
    if(this.item && state.params && state.params.update) {
      this.props.updateItem(this.item.id, data)
    } else {
      this.props.addItem(data)
    }
    Keyboard.dismiss()
    goBack(state.params.backKey || null)
  }

  render() {
    StatusBar.setBarStyle('dark-content', true)
    const buttonTitle = this.props.navigation.state.params.buttonTitle || 'ADD'

    return(
      <View style={Styles.wrapper}>
        <KeyboardAvoidingView>
          <ScrollView 
            scrollEnabled={!this.state.isLocked}
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={Styles.scrollContainer}
          >
            <View style={Styles.scrollItem} >
              <FormLabel>Item Name</FormLabel>
              <FormInput
                inputStyle={Styles.inputStyle}
                onChangeText={(text: string) => this.setState({itemName: text})}
                value={this.state.itemName}/>
            </View>
            <View style={[Styles.scrollItem, Styles.countItem]} >
              <View>
                <FormLabel>Count</FormLabel>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: true})}
                  style={Styles.countView} 
                >
                  <Tag 
                    style={Styles.countViewTag} 
                    text={this.state.count} 
                  />
                </TouchableOpacity>
              </View>
              <View style={Styles.countWrapper}>
                <Modal
                  isVisible={this.state.modalVisible}
                  onBackdropPress={() => this.setState({modalVisible: false})}
                > 
                  <View style={Styles.modalContent}>
                    <Picker 
                      selectedValue={""+this.state.count}
                      onValueChange={count => this.setState({count: parseInt(count)})}
                    >
                      {
                        Object.keys((Array.from(Array(100)): any)).map((e) => 
                          <Picker.Item key={e} label={e} value={e} />
                        )
                      }
                    </Picker>
                    <Button
                      backgroundColor={Colors.Blue}
                      title={'DONE'}
                      buttonStyle={Styles.submitButton}
                      onPress={()=>{this.setState({modalVisible: false})}}
                    />
                  </View>
                </Modal>
                <Slider
                  value={this.state.count}
                  onValueChange={(count) => this.setState({count})} 
                  minimumValue={0}
                  maximumValue={100} 
                  step={1}
                  maximumTrackTintColor={Colors.LightGrey}
                  minimumTrackTintColor={Colors.FontGrey}
                  thumbTintColor={Colors.Pink}
                  onSlidingStart={() => this.setState({isLocked: true})}
                  onSlidingComplete={() => this.setState({isLocked: false})}
                />
              </View>
            </View>
            <View style={Styles.scrollItem} >
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
            title={buttonTitle}
            buttonStyle={Styles.submitButton}
            containerViewStyle={Styles.submitButtonContainer}
            disabled={this.state.itemName == '' ? true : false}
            onPress={this.submitItem.bind(this)}
            />
        </KeyboardAvoidingView>
      </View>
    )
  }
}