// @flow

import UUID from 'uuid';

export default class Item {

  id: string;
  description: string;

  constructor(description: string) {
    this.id = UUID.v4();
    this.description = description;
  }

  equals(item: Item): bool {
    return this.description === item.description;
  }
}