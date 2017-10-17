// @flow

class ItemActions {
  addItem(name: string) {
    return {
      type: 'ADD_ITEM',
      text: name
    }
  }
}

export default new ItemActions()