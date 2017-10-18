import { connect } from 'react-redux'
import ItemList from './ItemListPresenter'
import ItemActions from 'src/actions/ItemActions'

const getCurrentItems = (items, filter) => {
  switch(filter) {
    default:
      return items
  }
}

const mapStateToProps = state => {
  return {
    items: getCurrentItems(state.items, state.currentFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: id => {
      dispatch(ItemActions.incrementItem(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList