import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {AppStateTypes} from '../redux/store/templates/appState'
import {slideBox} from '../redux/actions/index'

interface mapStateToPropsTypes {
    appState: AppStateTypes;
}

const mapStateToProps = (state: mapStateToPropsTypes, ownProps) =>  {
    return {
        appState: state.appState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateToRedux: () => {
            dispatch(push('/redux'))
        },
        navigateToObservable: () => {
            dispatch(push('/redux-observable'))
        },
        goBackToApp: () => {
            dispatch(push('/'))
        },
        triggerObservable: () => {
            dispatch(slideBox())
        }
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample