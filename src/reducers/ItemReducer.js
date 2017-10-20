// @flow

import Item from 'src/models/Item'

const ItemReducer = (state: Array<Item> = [], action: {type: string, id: string, data: ItemData}) => {
  switch(action.type) {
    case 'ADD_ITEM':
      if(action.data.name) {
        return [
          ...state,
          new Item(action.data.name, action.data)
        ]
      }
      return state

    case 'INCREMENT_ITEM': 
      let incItem: Item = (state.find(e=>e.id==action.id): any)
      if(incItem) {
        return state.map((item: Item, index) => {
          if(!item.equals(incItem)) {
            return item
          }

          return Object.assign(incItem, {count: incItem.count + 1})
        })
      }
      return state

    case 'UPDATE_ITEM':
      let updateItem: Item = (state.find(e=>e.id==action.id): any)
      if(updateItem) {
        return state.map((item: Item, index) => {
          if(!item.equals(updateItem)) {
            return item
          }

          for(var key in action.data) {
            Object.assign(updateItem, {[key]: action.data[key]})
          }
          return updateItem
        })
      }
      return state
    
    case 'DELETE_ITEM':
      const deleteItem: Item = (state.find(e=>e.id==action.id): any)
      if(deleteItem) {
        return state.filter(item => item.id != action.id)
      }
      return state
    default: 
      return state
  }
}

export default ItemReducer