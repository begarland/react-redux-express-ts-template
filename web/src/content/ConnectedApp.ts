import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import { IAppState } from '../redux/store/templates/appState'
import { changeInputValue, slideBox, spinLogoChange, fetchSampleData } from '../redux/actions/index'

interface IMapStateToPropsApp {
    appState: IAppState;
}

interface IMapDispatchToPropsApp {
    navigateToRedux: () => void;
    navigateToObservable: () => void;
    navigateToRepeaterSample: () => void;
    getSampleData: () => void;
    goBackToApp: () => void;
    triggerObservable: () => void;
    logoClick: () => void;
    inputChange: (key: string, value: string) => void;
}

const mapStateToProps = (state: IMapStateToPropsApp, ownProps) =>  {
    return {
        appState: state.appState
    }
}

const mapDispatchToProps = (dispatch, ownProps): IMapDispatchToPropsApp => {
    return {
        navigateToRedux: () => {
            dispatch(push('/redux'))
        },
        navigateToObservable: () => {
            dispatch(push('/redux-observable'))
        },
        navigateToRepeaterSample: () => {
            dispatch(push('/server'))
        },
        getSampleData: () => {
            dispatch(fetchSampleData())
        },
        goBackToApp: () => {
            dispatch(push('/'))
        },
        triggerObservable: () => {
            dispatch(slideBox())
        },
        logoClick: () => {
            dispatch(spinLogoChange())
        },
        inputChange: (key: string , value: string) => {
            dispatch(changeInputValue(key, value))
        }
    }
}

const ConnectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedApp