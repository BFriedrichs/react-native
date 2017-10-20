// @flow

class ItemActions {
  addItem(data: ItemData) {
    return {
      type: 'ADD_ITEM',
      data: data
    }
  }
  incrementItem(id: string) {
    return {
      type: 'INCREMENT_ITEM',
      id: id
    }
  }
  updateItem(id: string, data: ItemData) {
    return {
      type: 'UPDATE_ITEM',
      id: id,
      data: data
    }
  }
  deleteItem(id: string) {
    return {
      type: 'DELETE_ITEM',
      id: id
    }
  }
}

export default new ItemActions()