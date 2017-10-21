// @flow

import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { FormLabel } from 'react-native-elements'
import Tag from '../Tag'

import Styles from './styles'

export default class TagInput extends Component {
  state: {
    tags: Array<string>,
    currentTags: Array<string>,
    currentInput: string
  } = {
    tags: this.props.tags || [],
    currentTags: this.props.currentTags || [],
    currentInput: ''
  } 

  componentWillReceiveProps(nextProps: any) {
    this.setState({tags: nextProps.tags})
  }

  chooseTag(tag: string) {
    tag = tag.trim()
    if(tag != '' && !(this.state.currentTags.includes(tag))) {
      this.setState({
        currentInput: '',
        currentTags: [...this.state.currentTags, tag]
      }, () => {
        if(this.props.onChange) {
          this.props.onChange()
        }
      })
    }
  }

  removeTag(tag: string) {
    if(this.state.currentTags.includes(tag)) {
      this.setState({
        currentTags: this.state.currentTags.filter(e => {
          return e != tag
        })
      }, () => {
        if(this.props.onChange) {
          this.props.onChange()
        }
      })
      
    }
  }

  render() {
    let matchingTags: Array<string> = []
    if(this.state.currentInput != '') {
      matchingTags = this.state.tags.filter(tag => {
        return tag.startsWith(this.state.currentInput) && 
          !this.state.currentTags.includes(tag)
      })
    }

    matchingTags = [...this.state.currentTags, ...matchingTags]
    const displayTags = matchingTags.length > 0 ? 'flex' : 'none'
    const disabledTagButton = this.state.currentInput == ''
    let tagButtonStyle = [Styles.addButtonTag]
    if(disabledTagButton) {
      tagButtonStyle.push(Styles.disabled)
    }
    return (
      <View style={[Styles.container, this.props.style]}>
        <FormLabel labelStyle={{marginLeft: 0}} >{this.props.name}</FormLabel>
        <View style={Styles.inputWrapper}>
          <TextInput 
            style={Styles.inputStyle}
            onChangeText={(text: string) => this.setState({currentInput: text})}
            onSubmitEditing={() => {
              if(!this.props.hideButton) {
                this.chooseTag.bind(this, this.state.currentInput)
              }
            }}
            value={this.state.currentInput} 
            returnKeyType={'done'} />
            {
              this.props.hideButton ? null : (
                <TouchableOpacity
                style={Styles.addButton}
                disabled={disabledTagButton}
                onPress={this.chooseTag.bind(this, this.state.currentInput)}
                >
                  <Tag style={tagButtonStyle} text="Add" />
                </TouchableOpacity>
              )
            }
           
        </View>
        <View style={[{display: displayTags}, Styles.tagContainer]}>
        { 
          matchingTags.map((tag, i) => {
            let style = [Styles.tag]
            let func = this.chooseTag
            if(this.state.currentTags.includes(tag)) {
              style.push(Styles.chosenTag)
              func = this.removeTag
            }

            return (
              <TouchableOpacity
                key={i}
                onPress={func.bind(this, tag)}>
                <Tag style={style} text={tag} />
              </TouchableOpacity>
            )
          })
        }
        </View>
      </View>
    )
  }
}