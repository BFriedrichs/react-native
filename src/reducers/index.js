// @flow

import { combineReducers } from 'redux'

import items from './ItemReducer'
import tags from './TagReducer'
import filter from './FilterReducer'

const Reducer = combineReducers({
  items,
  tags,
  filter
})

export default Reducer