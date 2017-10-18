// @flow

import UUID from 'uuid';

export default class Item {

  id: string
  name: string
  count: number
  stores: Array<string>
  tags: Array<string>

  constructor(name: string, withData: any) {
    this.id = UUID.v4()
    this.name = name
    
    this.count = withData.count || 1
    this.stores = withData.stores || []
    this.tags = withData.tags || []
  }

  equals(item: Item): bool {
    return this.name === item.name
  }
}