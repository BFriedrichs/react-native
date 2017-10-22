// @flow

import Item from 'src/models/Item'

const FinishedItemReducer = (state: Array<Item> = [], action: {type: string, id: string, data: ItemData}) => {
  switch(action.type) {
    case 'ADD_ITEM':
      if(action.data.name) {
        return [
          ...state,
          new Item(action.data.name, action.data)
        ]
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

export default FinishedItemReducer