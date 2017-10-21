// @flow

const FilterReducer = (state: FilterData = {isFiltered: false, search: '', tags: []}, action: {type: string, data: FilterData}) => {
  switch(action.type) {
    case 'UPDATE_FILTER':
      let newState = {
        search: action.data.search || state.search || '',
        tags: action.data.tags || state.tags || [],
        isFiltered: false
      }
      newState.isFiltered = !(newState.search == '' && newState.tags.length == 0)

      return newState
    default: 
      return state
  }
}

export default FilterReducer