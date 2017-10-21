import { connect } from 'react-redux'
import ItemListPresenter from './ItemListPresenter'
import ItemActions from 'src/actions/ItemActions'
import FilterActions from 'src/actions/FilterActions'

const getCurrentItems = (items, filter) => {
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

  return filteredItems
}

const mapStateToProps = state => {
  return {
    items: getCurrentItems(state.items, state.filter),
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: (id: string) => {
      dispatch(ItemActions.incrementItem(id))
    },
    deleteItem: (id: string) => {
      dispatch(ItemActions.deleteItem(id))
    },
    updateFilter: (data: FilterData) => {
      dispatch(FilterActions.updateFilter(data))
    }
  }
}

const ItemListController = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListPresenter)

export default ItemListController