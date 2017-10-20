// @flow

import UUID from 'uuid';

export default class Item {

  id: string
  name: string
  count: number
  tags: Array<string>

  constructor(name: string, data: ItemData) {
    this.id = UUID.v4()
    this.name = name
    
    this.count = data.count || 1
    this.tags = data.tags || []
  }

  hasTags(): bool {
    return this.tags.length > 0
  }

  equals(item: Item): bool {
    return this.id === item.id
  }
}