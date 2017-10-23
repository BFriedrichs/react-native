// @flow

class FinishedItemActions {
  addItem(data: ItemData) {
    return {
      type: 'HISTORY_ADD_ITEM',
      data: data
    }
  }
  deleteItem(id: string) {
    return {
      type: 'HISTORY_DELETE_ITEM',
      id: id
    }
  }
}

export default new FinishedItemActions()