// @flow

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import TagInput from 'src/ui/components/TagInput'

import Styles from './styles'

export default class FilterMenuPresenter extends Component {
  tagsChanged() {
    const filter = {
      tags: this.refs.tagFilter.state.currentTags
    } 
    this.props.updateTags(filter)
  }

  render() {
    return (
      <View style={{padding: 16}}>
        <TagInput 
          hideButton
          onChange={this.tagsChanged.bind(this)}
          ref="tagFilter"
          name="Tags"
          style={{marginLeft: 0, marginRight: 0}}
          tags={this.props.tags}
          currentTags={this.props.filter.tags}
        />

      </View>
    )
  }
}