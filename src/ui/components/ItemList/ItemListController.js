import { connect } from 'react-redux'
import ItemListPresenter from './ItemListPresenter'
import ItemActions from 'src/actions/ItemActions'
import FilterActions from 'src/actions/FilterActions'
import FinishedItemActions from 'src/actions/FinishedItemActions'

import { getCurrentItems } from 'src/util/helper'

const mapStateToProps = state => {
  return {
    items: getCurrentItems(state.items, state.filter),
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStarClick: (id: string, starred: boolean) => {
      dispatch(ItemActions.updateItem(id, {starred: starred}))
    },
    deleteItem: (id: string) => {
      dispatch(ItemActions.deleteItem(id))
    },
    updateFilter: (data: FilterData) => {
      dispatch(FilterActions.updateFilter(data))
    },
    addToHistory: (data: ItemData) => {
      dispatch(FinishedItemActions.addItem(data))
    }
  }
}

const ItemListController = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListPresenter)

export default ItemListController