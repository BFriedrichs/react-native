import { connect } from 'react-redux'
import ItemListPresenter from './ItemListPresenter'
import ItemActions from 'src/actions/ItemActions'
import FilterActions from 'src/actions/FilterActions'
import FinishedItemActions from 'src/actions/FinishedItemActions'
import TagActions from 'src/actions/TagActions'

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
    deleteItem: (item: Item) => {
      dispatch(TagActions.deleteTags(item.tags))
      dispatch(ItemActions.deleteItem(item.id))
    },
    updateFilter: (data: FilterData) => {
      dispatch(FilterActions.updateFilter(data))
    },
    addToHistory: (data: ItemData) => {
      dispatch(TagActions.deleteTags(data.tags))
      dispatch(FinishedItemActions.addItem(data))
      dispatch(ItemActions.deleteItem(data.id))
    }
  }
}

const ItemListController = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListPresenter)

export default ItemListController