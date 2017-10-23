// @flow

import UUID from 'uuid';

export default class Item {

  id: string
  name: string
  count: number
  tags: Array<string>
  date: number
  starred: boolean

  constructor(name: string, data: ItemData) {
    this.id = UUID.v4()
    this.name = name
    
    this.count = data.count || 1
    this.tags = data.tags || []
    this.date = Date.now(),
    this.starred = data.starred || false
  }
}