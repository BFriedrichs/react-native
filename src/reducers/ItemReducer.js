// @flow

import Item from 'src/models/Item'

const ItemReducer = (state: Array<Item> = [], action: {type: string, id: string, data: any}) => {
  switch(action.type) {
    case 'ADD_ITEM':
      let currItem: Item = (state.find(e=>e.name==action.data.name): any)
      if(!currItem) {
        const additionalData = action.data.withData || {}

        return [
          ...state,
          new Item(action.data.name, additionalData)
        ]
      }

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

    case 'EDIT_ITEM':
      let editItem: Item = (state.find(e=>e.name==action.data.name): any)
      if(editItem) {
        return state.map((item: Item, index) => {
          if(!item.equals(editItem)) {
            return item
          }

          for(var key in action.data) {
            Object.assign(editItem, {[key]: action.data[key]})
          }
          return editItem
        })
      }

    default: 
      return state
  }
}

export default ItemReducer