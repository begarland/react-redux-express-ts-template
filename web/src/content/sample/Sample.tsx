import * as React from 'react'
import { Route, Switch } from 'react-router'
import { AppStateTypes } from '../../redux/store/templates/appState'
import ObservableSample from './ObservableSample'

export interface SampleTypes {
    appState: AppStateTypes;
    goBackToApp: (MouseEvent) => void;
    triggerObservable: (MouseEvent) => void;

}

const Sample = (props: SampleTypes) => {
    return (
        <div>
            <Switch>
                <Route
                    exact={true}
                    path="/sample"
                    render={() => {
                        return (
                                <div>
                                    <h1>{props.appState.sample}</h1>
                                    <button onClick={props.goBackToApp}>Go Back to localhost:3002</button>
                                </div>
                            )
                    }}
                />
                <Route
                    exact={true}
                    path="/redux-observable"
                    render={() => {
                        return (
                            <ObservableSample
                                appState={props.appState}
                                goBackToApp={props.goBackToApp}
                                triggerObservable={props.triggerObservable}
                            />
                        )
                    }}
                />
            </Switch>
        </div>
    )
}

export default Sample