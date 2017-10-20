// @flow

import { combineReducers } from 'redux'

import items from './ItemReducer'
import tags from './TagReducer'

const Reducer = combineReducers({
  items,
  tags
})

export default Reducer