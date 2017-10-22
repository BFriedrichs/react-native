import { connect } from 'react-redux'
import BottomBarPresenter from './BottomBarPresenter'

const getFilteredItems = (items, filter) => {
  let filteredItems = items
  if(filter.search != '') {
    filteredItems = filteredItems.filter(item => {
      return item.name.includes(filter.search)
    })
  }

  if(filter.tags.length > 0) {
    filteredItems = filteredItems.filter(item => {
      return item.tags.find(tag => {
        return filter.tags.includes(tag)
      })
    })
  }

  switch(filter.sort.key) {
    default:
    case 'SORT_DATE':
      filteredItems = filteredItems.sort((i1, i2) => {
        return i1.date > i2.date
      })
      break
    case 'SORT_NAME':
      filteredItems = filteredItems.sort((i1, i2) => {
        return i1.name > i2.name
      })
      break
    case 'SORT_COUNT':
      filteredItems = filteredItems.sort((i1, i2) => {
        return i1.count > i2.count
      })
      break
  }

  if(filter.sort.by == 'DESC') {
    filteredItems = filteredItems.reverse()
  }

  return filteredItems
}

const mapStateToProps = state => {
  return {
    items: state.items,
    filter: state.filter,
    filteredItems: getFilteredItems(state.items, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const BottomBarController = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarPresenter)

export default BottomBarController