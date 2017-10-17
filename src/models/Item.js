// @flow

import UUID from 'uuid';

export default class Item {

  id: string
  name: string
  count: number
  
  constructor(name: string) {
    this.id = UUID.v4()
    this.name = name
    this.count = 1
  }

  equals(item: Item): bool {
    return this.name === item.name
  }
}