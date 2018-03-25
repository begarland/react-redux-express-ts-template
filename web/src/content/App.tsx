import * as React from 'react'

import ConnectedSample from './sample/ConnectedSample'
import { AppStateTypes } from '../redux/store/templates/appState'

interface AppProps {
    appState: AppStateTypes;
    navigateToSample: (Event) => void;
    navigateToObservable: (Event) => void;
}

const App = (props: AppProps) => {
    return (
        <div className="App">
            <div className="App-header">
                <h2>React-Redux-Express-TypeScript-Sass template</h2>
                <h4>navigate to localhost:3002/sample to view the connected Redux-router component</h4>
                {props.appState.showNavigateButton &&
                    <div className="inline-button-container">
                        <button onClick={props.navigateToSample}>redux</button>
                        <button onClick={props.navigateToObservable}>redux-observable</button>
                    </div>
                }
            </div>
            <ConnectedSample/>
        </div>
    )
}

export default App
