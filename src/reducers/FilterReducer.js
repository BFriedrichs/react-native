// @flow

const FilterReducer = (state: FilterData = {isFiltered: false, sort: {key: 'SORT_DATE', by: 'ASC'}, search: '', tags: []}, action: {type: string, data: FilterData}) => {
  switch(action.type) {
    case 'UPDATE_FILTER':

      /*
      let newState = {
        search: action.data.search != null ? action.data.search : state.search || '',
        tags: action.data.tags || state.tags || [],
        sort: {
          key: action.data.sort && action.data.sort.key || state.sort && state.sort.key || 'SORT_DATE',
          by: action.data.sort && action.data.sort.by || state.sort && state.sort.by || 'ASC'
        },
        isFiltered: false
      }
      */
      let newSort = state.sort
      if(action.data.sort) {
        newSort = Object.assign({}, state.sort, action.data.sort)
      }
      
      let newState: FilterData = Object.assign({}, state, action.data, {sort: newSort})
      newState.isFiltered = !(newState.search == '' && newState.tags && newState.tags.length == 0)

      return newState
    default: 
      return state
  }
}

export default FilterReducer