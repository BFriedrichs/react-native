// @flow

import Item from '../models/Item'

class ItemActions {
  static i = 0
  static createItemWithName(name: string): Item {
    ItemActions.i+=1;
    return new Item(name+ItemActions.i);
  }
}

export default ItemActions