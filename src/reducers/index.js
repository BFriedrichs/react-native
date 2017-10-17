// @flow

import { combineReducers } from 'redux'

import items from './ItemReducer'

const Reducer = combineReducers({
  items
})

export default Reducer