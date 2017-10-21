// @flow

class FilterActions {
  updateFilter(data: FilterData) {
    return {
      type: 'UPDATE_FILTER',
      data: data
    }
  }
}

export default new FilterActions()