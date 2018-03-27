import * as React from 'react'

import Routes from './sample/Routes'
import { AppStateTypes } from '../redux/store/templates/appState'

const reactLogo = './assets/images/reactReduxTS.png'

interface AppTypes {
    appState: AppStateTypes;
    navigateToRedux: (MouseEvent) => void;
    navigateToObservable: (MouseEvent) => void;
    goBackToApp: (MouseEvent) => void;
    triggerObservable: (MouseEvent) => void;
    logoClick: (MouseEvent) => void;
}

const App = (props: AppTypes) => {
    return (
        <div className="App">
            <div className="App-header">
                <img
                    src={reactLogo}
                    className={`header-logo ${props.appState.spinLogo ? 'spin-logo' : ''}`}
                    onClick={props.logoClick}
                />
                <h2 className="header-text">React-Redux-TypeScript-Express template</h2>
                {props.appState.showNavigateButton &&
                    <div className="inline-button-container">
                        <button onClick={props.navigateToRedux}>redux</button>
                        <button onClick={props.navigateToObservable}>redux-observable</button>
                    </div>
                }
                {!props.appState.showNavigateButton &&
                    <div className="inline-button-container">
                        <button onClick={props.goBackToApp}>Go Back to localhost:3002</button>
                    </div>
                }
            </div>
            <Routes {...props}/>
        </div>
    )
}

export default App
