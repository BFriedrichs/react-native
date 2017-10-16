// @flow

import Item from '../models/Item'
import ItemStore from '../stores/ItemStore';

class ItemActions {
  i = 0
  addItemWithName(name: string) {
    this.i+=1;
    ItemStore.addItem(new Item(name+this.i));
  }

  increaseCountForId(itemId: string) {
    const item = ItemStore.getItemWithId(itemId);
    if(item) {
      ItemStore.addItem(item);
    }
  }

}

export default new ItemActions()