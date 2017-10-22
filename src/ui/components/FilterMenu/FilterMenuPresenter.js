// @flow

import React, { Component } from 'react'
import { StyleSheet, ScrollView, Picker, View, Text, Button, TouchableOpacity } from 'react-native'
import { FormLabel } from 'react-native-elements' 

import KeyboardAvoidingView from '../KeyboardAvoidingView'
import TagInput from '../TagInput'

import Styles from './styles'

export default class FilterMenuPresenter extends Component {
  tagsChanged() {
    const filter = {
      tags: this.refs.tagFilter.state.currentTags
    } 
    this.props.updateFilter(filter)
  }

  updateSortKey(key: string) {
    this.props.updateFilter({sort: {key: key}})
  }

  updateSortBy(by: string) {
    this.props.updateFilter({sort: {by: by}})
  }

  render() {
    const itemHeight = 100

    return (
      <KeyboardAvoidingView
        adjustable={56}
      >
        <ScrollView 
          style={{padding: 16}}
        >
          <TagInput 
            hideButton
            onChange={this.tagsChanged.bind(this)}
            ref="tagFilter"
            name="TAGS"
            style={{marginLeft: 0, marginRight: 0, marginBottom: 30}}
            tags={this.props.tags}
            currentTags={this.props.filter.tags}
          />
          <FormLabel labelStyle={{marginLeft: 0}} >SORT</FormLabel>
          <Picker
            itemStyle={{height: itemHeight}}
            selectedValue={this.props.filter.sort.key}
            onValueChange={this.updateSortKey.bind(this)}
          >
            <Picker.Item label={'Date'} value={'SORT_Date'} />
            <Picker.Item label={'Name'} value={'SORT_NAME'} />
            <Picker.Item label={'Count'} value={'SORT_COUNT'} />
          </Picker>

          <FormLabel labelStyle={{marginLeft: 0}} >BY</FormLabel>
          <Picker
            itemStyle={{height: itemHeight}}
            style={{marginBottom: 32}}
            selectedValue={this.props.filter.sort.by}
            onValueChange={this.updateSortBy.bind(this)}
          >
            <Picker.Item label={'Ascending'} value={'ASC'} />
            <Picker.Item label={'Descending'} value={'DESC'} />
          </Picker>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}