// @flow

import { AsyncStorage } from 'react-native';
import Item from '../models/Item';

class ItemStore {

  _STORAGE_NAME = '@ItemStore';

  storage: [{
    item: Item,
    count: number
  }];

  constructor() {
    this.storage = [];

    AsyncStorage.getItem(`${this._STORAGE_NAME}:items`, (error, result) => {
      if(!error && result) {
        try {
          const loadedItems = JSON.parse(result);
          this.storage = loadedItems;
        } catch(e) {
          console.error("Couldn't parse old items");
        }
      } else {
        console.info("Couldn't load old items.");
      }
    });
  }

  addItem(item: Item) {
    let storedItem = this.storage.find(e=>e.item.equals(item))

    if(storedItem) {
      storedItem.count += 1;
    } else {
      this.storage.push({
        item: item,
        count: 1
      });
    }

    // this.save();
  }

  save() {
    try {
        AsyncStorage.setItem(`${this._STORAGE_NAME}:items`, JSON.stringify(this.storage));
      } catch (error) {
        console.error("Couldn't save items.");
      }
  }

  getItemWithId(id: string): ?Item {
    const storedItem = this.storage.find(e=>e.item.id == id);
    return !!storedItem ? storedItem.item : null;
  }

  getItems() {
    return this.storage;
  }
}

export default new ItemStore()