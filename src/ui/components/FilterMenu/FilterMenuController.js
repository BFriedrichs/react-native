import { connect } from 'react-redux'
import FilterMenuPresenter from './FilterMenuPresenter'

import FilterActions from 'src/actions/FilterActions'

const mapStateToProps = state => {
  return {
    tags: state.tags,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (data: FilterData) => {
      dispatch(FilterActions.updateFilter(data))
    }
  }
}

const FilterMenuController = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMenuPresenter)

export default FilterMenuController