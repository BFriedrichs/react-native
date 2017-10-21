import { connect } from 'react-redux'
import SideMenuPresenter from './SideMenuPresenter'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const SideMenuController = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuPresenter)

export default SideMenuController