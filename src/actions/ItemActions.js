// @flow

class ItemActions {
  addItem(name: string, withData: any) {
    return {
      type: 'ADD_ITEM',
      data: {
        name: name,
        withData: withData
      }
    }
  }
  incrementItem(id: string) {
    return {
      type: 'INCREMENT_ITEM',
      id: id
    }
  }
  editItem(id: string, data: any) {
    return {
      type: 'EDIT_ITEM',
      id: id,
      data: data
    }
  }
}

export default new ItemActions()