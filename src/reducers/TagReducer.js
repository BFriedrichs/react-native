// @flow

const TagReducer = (state: Array<string> = [], action: {type: string, tags: Array<string>}) => {
  switch(action.type) {
    case 'ADD_TAGS':
      return [
        ...state,
        ...(action.tags.filter((tag => {
          return !state.includes(tag)
        })))
      ]

    default: 
      return state
  }
}

export default TagReducer