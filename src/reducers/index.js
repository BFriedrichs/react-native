// @flow

import { combineReducers } from 'redux'

import items from './ItemReducer'
import tags from './TagReducer'
import filter from './FilterReducer'
import finishedItems from './FinishedItemReducer'

const Reducer = combineReducers({
  items,
  tags,
  filter,
  finishedItems
})

export default Reducer