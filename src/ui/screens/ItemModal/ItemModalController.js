import { connect } from 'react-redux'
import ItemModalPresenter from './ItemModalPresenter'
import ItemActions from 'src/actions/ItemActions'
import TagActions from 'src/actions/TagActions'

const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTags: tags => {
      dispatch(TagActions.addTags(tags))
    },
    addItem: data => {
      dispatch(ItemActions.addItem(data))
    },
    updateItem: (id, data) => {
      dispatch(ItemActions.updateItem(id, data))
    }
  }
}

const ItemModalController = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemModalPresenter)

export default ItemModalController