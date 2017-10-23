// @flow

class TagActions {
  addTags(tags: Array<String>) {
    return {
      type: 'ADD_TAGS',
      tags: tags
    }
  }
  deleteTags(tags: Array<String>) {
    return {
      type: 'DELETE_TAGS',
      tags: tags
    }
  }
}

export default new TagActions()