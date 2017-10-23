// @flow

import Item from 'src/models/Item'

const FinishedItemReducer = (state: Array<Item> = [], action: {type: string, id: string, data: ItemData}) => {
  switch(action.type) {
    case 'HISTORY_ADD_ITEM':
      if(action.data.name) {
        let data = Object.assign({}, action.data)
        
        if(data.id) {
          delete data.id
        }
        if(data.tags) {
          delete data.tags
        }

        let currItem: Item = (state.find(item => item.name == data.name): any)

        if(currItem) {
          return state.map((item: Item, index) => {
            if(item.name != currItem.name) {
              return item
            }
  
            return Object.assign(currItem, {count: currItem.count + data.count})
          })
        } else {
          return [
            ...state,
            new Item((data.name: any), data)
          ]
        }
      }
      return state

    
    case 'HISTORY_DELETE_ITEM':
      const deleteItem: Item = (state.find(e => e.id == action.id): any)
      if(deleteItem) {
        return state.filter(item => item.id != action.id)
      }
      return state

    default: 
      return state
  }
}

export default FinishedItemReducer