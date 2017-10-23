import { connect } from 'react-redux'
import HistoryPresenter from './HistoryPresenter'
import FinishedItemActions from 'src/actions/FinishedItemActions'
import ItemActions from 'src/actions/ItemActions'

const mapStateToProps = state => {
  return {
    items: state.finishedItems.sort((i1, i2) => i1.count < i2.count)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem(id: string) {
      dispatch(FinishedItemActions.deleteItem(id))
    }
  }
}

const HistoryController = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPresenter)

export default HistoryController