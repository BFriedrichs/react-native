// @flow

class FinishedItemActions {
  addItem(data: ItemData) {
    return {
      type: 'ADD_ITEM',
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

export default new FinishedItemActions()