// @flow

import UUID from 'uuid';

export default class Item {

  id: string;
  name: string;
  
  constructor(name: string) {
    this.id = UUID.v4();
    this.name = name;
  }

  equals(item: Item): bool {
    return this.name === item.name;
  }
}