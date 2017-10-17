// @flow

import Item from 'src/models/Item'

const ItemReducer = (state: Array<Item> = [], action: {type: string, text: string}) => {
  switch(action.type) {
    case 'ADD_ITEM':
      let currItem: Item = (state.find(e=>e.name==action.text): any)
      if(currItem) {
        return state.map((item: Item, index) => {
          if(!item.equals(currItem)) {
            return item
          }

          return Object.assign(currItem, {count: currItem.count + 1})
        })
      }

      return [
        ...state,
        new Item(action.text)
      ]
    default: 
      return state
  }
}

export default ItemReducer