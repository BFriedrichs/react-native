// @flow

import React, { Component } from 'react'
import { Animated, Keyboard, Platform, StyleSheet, View, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Swipeable from 'react-native-swipeable'
import * as Animatable from 'react-native-animatable';

import Styles from './styles'

import Colors from 'src/ui/Colors'

import Welcome from '../Welcome'
import Tag from '../Tag'
import Item from 'src/models/Item'
import FontAwesomeIconI from 'react-native-vector-icons/FontAwesome'
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const FontAwesomeIcon = Animatable.createAnimatableComponent(FontAwesomeIconI);

import I18n from 'src/locales'

class ItemListItem extends Component {

  state = {
    finishIcon: 'check-circle-outline',
    deleteIcon: 'close-circle-outline'
  }

  animation: any
  animationTimer = 500

  componentWillMount() {
    this.animation = new Animated.Value(0)
  }

  render() {
    const item = this.props.item
    const hasTags = item.tags.length > 0

    const interpolatedGreen = this.animation.interpolate({
      inputRange: [0, 150],
      outputRange: [Colors.LightGrey, Colors.Green]
    })

    const interpolatedRed = this.animation.interpolate({
      inputRange: [0, 150],
      outputRange: [Colors.LightGrey, Colors.Red]
    })

    const deleteButton = (
      <Animated.View style={[Styles.button, { backgroundColor: interpolatedRed }]}>
        <MaterialCommIcon
          color='#f1f1f1'
          ref='finishIcon'
          size={36}
          style={{marginTop: 4}}
          name={this.state.deleteIcon}
        />  
        <Text style={Styles.actionText} >{I18n.t('delete')}</Text>
      </Animated.View>
    )
  
    const finishButton = (
      <Animated.View style={[Styles.button, { justifyContent: 'flex-end', backgroundColor: interpolatedGreen }]}>
        <Text style={Styles.actionText}>{I18n.t('done')}</Text>
        <MaterialCommIcon
          color='#f1f1f1'
          ref='finishIcon'
          size={36}
          style={{marginTop: 4}}
          name={this.state.finishIcon}
        />  
      </Animated.View>
    )

    // extra View for shadow because of: https://github.com/facebook/react-native/issues/14868
    return (
      <Animatable.View 
        style={Styles.listItemWrapper}
        animation="slideInRight"
        ref="animatable"
        duration={500} 
      > 
        <View style={Styles.shadow} >
          <Swipeable 
            onLeftActionActivate={() => {
                //this.setState({ finishIcon: 'check-circle' })
                Animated.timing(this.animation, {
                  toValue: 150,
                  duration: this.animationTimer
                }).start()
              }
            }
            onLeftActionDeactivate={() => {
                //this.setState({ finishIcon: 'check-circle-outline' })
                Animated.timing(this.animation, {
                  toValue: 0,
                  duration: this.animationTimer
                }).start()
              }
            }
            onRightActionActivate={() => {
                //this.setState({ deleteIcon: 'close-circle' })
                Animated.timing(this.animation, {
                  toValue: 150,
                  duration: this.animationTimer
                }).start()
              }
            }
            onRightActionDeactivate={() => {
                //this.setState({ deleteIcon: 'close-circle-outline' })
                Animated.timing(this.animation, {
                  toValue: 0,
                  duration: this.animationTimer
                }).start()
              }
            }
            leftContent={finishButton}
            rightContent={deleteButton}
            onSwipeStart={this.props.setLock.bind(true)}
            onSwipeRelease={this.props.setLock.bind(false)}
            onRightActionRelease={() => {
              this.refs.animatable.zoomOutUp(800)
              this.refs.animatable.transitionTo({marginTop: -100}, 800)
              setTimeout(() => {
                this.props.deleteItem(item)
              }, 800)
            }}
            onLeftActionRelease={() => {
              this.refs.animatable.slideOutRight(800)
              this.refs.animatable.transitionTo({marginTop: -100}, 800)
              setTimeout(() => {
                this.props.addToHistory(item)
              }, 800)
            }}
            style={{ overflow: 'hidden' }}
          > 
            <TouchableOpacity
              onPress={this.props.editItem}
            >
              <View style={Styles.listItem}>
                <Tag 
                  style={[Styles.count, {width: (`${item.count}`.length * 25)}]} 
                  font={Styles.countText} 
                  text={'' + item.count} />
                <View style={{flex: 1, paddingRight: 8}}>
                  <Text color={Colors.FontGrey} style={Styles.text}>
                    {item.name}
                  </Text>
                  <View style={[Styles.tagsWrapper, {display: hasTags ? 'flex' : 'none'}]} >
                    <Text style={Styles.tags} >
                    {
                      hasTags && item.tags.reduce((e1, e2) => 
                        e1 + ' · ' + e2
                      )
                    }
                    </Text>
                  </View>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    if(this.props.globalCount > 1) {
                      this.refs.animatable.slideOutRight(800).then(() => {
                        this.props.onStarClick(item.id, !item.starred)
                        this.refs.animatable.slideInRight(800).then(() => {
                          item.starred && this.refs.favIcon.tada()
                        })
                      })
                    } else {
                      this.props.onStarClick(item.id, !item.starred)
                      item.starred && this.refs.favIcon.tada()
                    }
                  }}
                >
                  <FontAwesomeIcon
                    ref='favIcon'
                    name={item.starred ? 'star' : 'star-o'}
                    size={40}
                    color={item.starred ? Colors.Yellow : Colors.LightGrey}
                  />
                </TouchableWithoutFeedback>
              </View>

            </TouchableOpacity>
          </Swipeable>
        </View>
      </Animatable.View>
    )
  }
}

export default class ItemList extends Component {
  state = {
    isLocked: false,
    isSearching: false
  }

  setLock(event: any, state: any) {
    this.setState({isLocked: state.numberActiveTouches != 0})
  }

  editItem(item: Item) {
    const { navigate } = this.props.navigation

    navigate('ItemModal', {title: I18n.t('editItem'), item: item, buttonTitle: I18n.t('update'), update: true})
  }

  renderItem(element: {item: Item}) {
    return (
      <ItemListItem 
        ref={element.item.id}
        deleteItem={this.props.deleteItem}
        editItem={this.editItem.bind(this, element.item)}
        onStarClick={this.props.onStarClick}
        addToHistory={this.props.addToHistory}
        item={element.item} 
        globalCount={this.props.items.length}
        setLock={this.setLock.bind(this)}
        onIncreaseClick={this.props.onIncreaseClick}
      />
    )
  }

  keyExtractor(item: Item, index: number) {
    return item.id
  } 

  didInit = false

  componentDidUpdate() {
    setTimeout(() => {
      if(!this.state.isLocked && !this.state.isSearching && this.refs.scrollView && this.props.filter.search == '') {
        this.refs.scrollView.scrollTo({ x: 0, y: 50, animated: true })
        Keyboard.dismiss()
      }
    }, 0)
  }

  submitEdit() {
    this.setState({isSearching: false})
  }

  render() {
    if(this.props.items.length == 0 && !this.props.filter.isFiltered) {
      return <Welcome />
    }
    return (
      <ScrollView 
        ref='scrollView'
        scrollEnabled={!this.state.isLocked}
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1}}
      >
        <SearchBar 
          lightTheme
          onChangeText={text => {
            this.setState({isSearching: true})
            this.props.updateFilter({search: text})
          }}
          onSubmitEditing={this.submitEdit.bind(this)}
          onBlur={this.submitEdit.bind(this)}
          placeholder={I18n.t('search')}
          containerStyle={{ backgroundColor: Colors.GreyBackground }}
          returnKeyType='search'
          inputStyle={{ color: Colors.FontGrey }}
        />
        <FlatList 
          ref='list'
          contentContainerStyle={{paddingBottom: 8}}
          scrollEnabled={false}
          data={this.props.items}
          extraData={this.props.items.map(item => {return item.id})}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
        />
      </ScrollView>
    )
  }
}

