// @flow

import { AsyncStorage } from 'react-native';
import Item from '../models/Item';

class ItemStore {

  _STORAGE_NAME = '@ItemStore';

  items: Array<Item>;

  constructor() {
    this.items = [];

    AsyncStorage.getItem(`${this._STORAGE_NAME}:items`, (error, result) => {
      if(!error && result) {
        try {
          const loadedItems: Item[] = JSON.parse(result);
          this.items = loadedItems;
        } catch(e) {
          console.error("Couldn't parse old items");
        }
      } else {
        console.info("Couldn't load old items.");
      }
    });
  }

  storeItem(item: Item) {
    if(!this.items.some(e=>e.equals(item))) {
      this.items.push(item);
      // this.save();
    }
  }

  save() {
    try {
        AsyncStorage.setItem(`${this._STORAGE_NAME}:items`, JSON.stringify(this.items));
      } catch (error) {
        console.error("Couldn't save items.");
      }
  }

  getItems() {
    return this.items;
  }
}

export default new ItemStore()