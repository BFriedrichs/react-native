// @flow

type StoredTag = {
  tag: string, 
  count: number
}

const TagReducer = (state: Array<StoredTag> = [], action: {type: string, tags: Array<string>}) => {
  switch(action.type) {
    case 'ADD_TAGS':

      // add 1 to the count of every existing dict
      let newState = state.map(storedTag => {
        let currTag = (action.tags.find(tag => storedTag.tag == tag): any)
        if(!currTag) {
          return storedTag
        }

        return Object.assign(storedTag, {count: storedTag.count + 1})
      })

      // push every non existent tag as a new dict with a count of one
      newState = [
        ...newState,
        ...action.tags.filter(tag => {
          return !newState.find((storedTag: StoredTag) => storedTag.tag == tag) 
        }).map(tag => {
            return {tag: tag, count: 1}
        })
      ]

      return newState

    case 'DELETE_TAGS':
      let delState = state.map(storedTag => {
        let currTag = (action.tags.find(tag => storedTag.tag == tag): any)
        if(!currTag) {
          return storedTag
        }

        return Object.assign(storedTag, {count: storedTag.count - 1})
      })

      return delState.filter(storedTag => storedTag.count > 0)

    default: 
      return state
  }
}

export default TagReducer